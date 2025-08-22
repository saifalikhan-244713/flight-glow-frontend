// ErrorComponent.js
import React from "react";
import ErrorComponent from "@/components/Errors/ErrorComponent";

// Define the type of the errorMessage prop
type ErrorAuthComponentProps = {
  errors: {
    email?: {
      type: string;
    };
    password?: {
      type: string;
    };
  };
};

const ErrorAuthComponent: React.FC<ErrorAuthComponentProps> = ({ errors }) => {
  return (
    <>
      {errors.email && errors.email.type === "required" && (
        <ErrorComponent errorMessage={"Email field is required"} />
      )}
      {errors.email && errors.email.type === "pattern" && (
        <ErrorComponent errorMessage={"Please write a valid email"} />
      )}

      {errors.password && errors.password.type === "required" && (
        <ErrorComponent errorMessage={"Password field is required"} />
      )}
    </>
  );
};

export default ErrorAuthComponent;
