import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/slices/store";
import { setCurrentPage } from "@/store/slices/searchSlice"; // Import setCurrentPage action

interface SearchResult {
  // Define the structure of your search result object
}

const usePagination = () => {
  const dispatch = useDispatch();
  const { results, itemsPerPage, currentPage, totalItems, resultRow } =
    useSelector((state: RootState) => state.search);

  const [currentData, setCurrentData] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (results && results.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
      // console.log(`Start Index: ${startIndex}, End Index: ${endIndex}`);
      // console.log(
      //   `Current Page: ${currentPage}, Items Per Page: ${itemsPerPage}`
      // );

      setCurrentData(results.slice(startIndex, endIndex));

      // console.log("Current Results:", currentData);
    }
  }, [results, currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const goToPage = (page: number) => {

    dispatch(setCurrentPage(page)); // Dispatch setCurrentPage action
  };

  return {
    currentData,
    currentPage,
    totalPages,
    goToPage,
  };
};

export default usePagination;
