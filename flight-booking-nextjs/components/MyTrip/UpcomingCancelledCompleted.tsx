import type { NextPage } from "next";
import FlightCard from "@/components/MyTrip/FlightCard";
import { fetchFlightOrders } from '@/utils/orderUtils';
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/pagination";
import usePagination from "@/components/MyTrip/usePagination";
import { useSession } from "next-auth/react";
import Loading from '@/components/Loading';

interface UpcomingCancelledCompletedProps {
    tab: string;
}

const UpcomingCancelledCompleted: React.FC<UpcomingCancelledCompletedProps> = ({ tab }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { currentData, currentPage, totalPages, goToPage, setPageData } = usePagination();
    const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
    const [prevPageUrl, setPrevPageUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { data: session } = useSession();

    const getFlightOrders = async (status: string, page: number) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchFlightOrders(session, status, dispatch, page);
            const orders = response?.data;

            if (orders && orders.data) {
                setPageData(orders.data, orders.total, orders.per_page);
                setNextPageUrl(orders.next_page_url);
                setPrevPageUrl(orders.prev_page_url);
            } else {
                throw new Error("Invalid response structure");
            }
        } catch (error) {
            console.error("Failed to fetch flight orders:", error);
            setError("Failed to load flight orders. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let status;
        switch (tab) {
            case 'UPCOMING':
                status = "ACTIVE";
                break;
            case 'CANCELLED':
                status = "CANCELLED";
                break;
            case 'COMPLETED':
                status = "COMPLETED";
                break;
            default:
                status = "ACTIVE";
        }
        getFlightOrders(status, currentPage);
    }, [tab, currentPage]);

    if (loading) return <Loading text="Hold on, we’re fetching orders for you"/>;

    if (error) return <div>{error}</div>;

    const renderContent = () => {
        if (currentData().length > 0) {
            return (
                <>
                    {currentData().map((order: any, index: number) => (
                        <FlightCard key={index} data={order} />
                    ))}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPage={goToPage}
                    />
                </>
            );
        } else {
            switch (tab) {
                case 'UPCOMING':
                    return <div>No upcoming flights.</div>;
                case 'CANCELLED':
                    return <div>No cancelled flights.</div>;
                case 'COMPLETED':
                    return <div>No completed flights.</div>;
                default:
                    return <div>No flights available.</div>;
            }
        }
    };

    return (
        <>
            {renderContent()}
        </>
    );
};

export default UpcomingCancelledCompleted;
