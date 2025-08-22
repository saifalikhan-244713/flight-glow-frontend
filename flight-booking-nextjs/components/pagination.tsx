import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  goToPage,
}) => {
  // Calculate the range of pages to display
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // Define the number of pages to display before and after the current page
  const displayRange = 15;

  // Generate an array of page numbers to display
  const pages = range(
    Math.max(1, currentPage - displayRange),
    Math.min(totalPages, currentPage + displayRange)
  );

  return (
    <div className="flex items-center gap-4">
      <button
        className={`flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 cursor-pointer ${
          currentPage === 1 ? "opacity-50 pointer-events-none " : ""
        }`}
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="w-4 h-4" />
        Previous
      </button>

      <div className="flex items-center gap-2 ">
        {pages.map((page) => (
          <button
            key={page}
            className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all ${
              currentPage === page
                ? "bg-blue-2 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
            }`}
            type="button"
            onClick={() => goToPage(page)}
            disabled={currentPage === page}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {page}
            </span>
          </button>
        ))}
      </div>

      <button
        className={`flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 cursor-pointer ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        }`}
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
