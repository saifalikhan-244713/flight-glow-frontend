// ErrorComponent.js
import React from "react";
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';


type ErrorComponentProps = {
  errorMessage?: any;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorMessage }) => {
  return (
    <>
      {/* <div
        id="alert-2" className="flex items-center w-full p-0 text-red "
        role="alert">
        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div className="ms-2 text-sm font-medium">{errorMessage}</div>
      </div> */}
      <div
        id="alert-2"
        className="flex items-center w-full p-0 text-red"
        role="alert"
      >
        <ExclamationCircleIcon className="flex-shrink-0 w-4 h-4" aria-hidden="true" />
        <div className="ms-2 text-sm font-medium">{errorMessage}</div>
      </div>
    </>
  );
};

export default ErrorComponent;
