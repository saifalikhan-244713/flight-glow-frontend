import { useState } from 'react';

const usePagination = (initialPage = 1) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState<any[]>([]); // Ensure data is initialized as an array

    const setPageData = (data: any[], total: number, perPage: number) => {
        setData(data);
        setTotalPages(Math.ceil(total / perPage));
    };
    
    const currentData = () => data || []; // Ensure currentData always returns an array

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    return { currentData, currentPage, totalPages, goToPage, setPageData };
};

export default usePagination;
