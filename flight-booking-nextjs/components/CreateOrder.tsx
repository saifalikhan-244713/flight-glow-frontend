import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { PlusIcon, ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import OrderController from '@/controllers/order.controller';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/slices/store';
import { useSession } from 'next-auth/react';
import { handleCreateOrder } from '@/utils/orderUtils'; // Import the utility function
import Image from 'next/image';
import { useRouter } from 'next/router';

function CreateOrder() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state: RootState) => state.search);

  const { TravellerResults, ContactResults, TravellerSelectedResults } =
    useSelector((state: RootState) => state.traveller);

  const { seatMapResult, selectedSeats } = useSelector(
    (state: RootState) => state.seatmap,
  ) as unknown as {
    seatMapResult: any[]; // Use any[] or a more specific type if known
    selectedSeats: any;
    returnDate: any;
  };

  const [alertOpen, setAlertOpen] = useState(false);
  const { resultRow, adult, children, infants } = useSelector(
    (state: RootState) => state.search,
  );
  const { data: session } = useSession();

  // const [error, setError] = useState("");
  const [orderId, SetorderId] = useState('');

  return (
    <>
      {TravellerResults &&
      Array.isArray(TravellerResults) &&
      TravellerResults.length > 0 ? (
        <div className="box-border flex max-w-full flex-row items-start justify-end gap-[1px] self-stretch overflow-hidden rounded-b-none rounded-t-3xs px-10 py-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95)),_#0065ca]">
          <button
            onClick={() =>
              handleCreateOrder(
                dispatch,
                selectedSeats,
                router,
                session,
                resultRow,
                adult,
                children,
                infants,
                TravellerResults,
                ContactResults,
                setAlertOpen,
              )
            }
            className="box-border flex w-[190px] shrink-0 cursor-pointer flex-row items-center justify-center overflow-hidden rounded-3xs bg-blue-2 px-[44.5px] py-2.5 [border:none]"
          >
            <div className="relative inline-block min-w-[27px] flex-1 text-center font-kanit text-sm font-semibold leading-[20px] text-white">
              Book Now
            </div>
            {loading ? (
              <Image
                src="/fly.gif"
                width={30}
                height={30}
                alt="Loading"
                unoptimized={true}
              />
            ) : (
              <ArrowRightCircleIcon className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
export default CreateOrder;
