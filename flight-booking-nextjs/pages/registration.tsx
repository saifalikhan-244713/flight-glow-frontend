// import type { NextPage } from "next";
// import TopHeader from "@/components/top-header";
// import Button1 from "@/components/button1";
// import { useForm, FormProvider, FieldValues } from "react-hook-form";
// import SignUpModel from "../models/signUp.model";
// import AuthController from "../controllers/auth.controller";
// import ErrorComponent from "@/components/Errors/ErrorComponent";
// import SuccessComponent from "@/components/Success/SuccessComponent";
// import CustomInput from "@/components/Common/CustomInput";
// import { useState } from "react";

// const Registration: NextPage = () => {
//   const methods = useForm<FieldValues>(); // Initialize form methods
//   const {
//     handleSubmit,
//     formState: { errors },
//     watch,
//     reset,
//   } = methods;
//   const [loading, setLoading] = useState(false);

//   const password = watch("password"); // Watch the password field
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const onSubmit = async (data: FieldValues) => {
//     setError(""); setSuccess("");
//     setLoading(true);
//     const signUpData = new SignUpModel(data);
//     try {
//       const response = await AuthController.SignUp(signUpData);

//       if (response.status === 200 && response.data.errors.length === 0) {
//         setSuccess(response.data.message);

//         reset(); // Clear input fields
//       } else {
//         setError(response.data.detail);
//       }
//     } catch (err: any) {
//       setError(err.title);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="w-full relative bg-white flex flex-col items-start justify-start tracking-[normal]">
//       <TopHeader
//         frameDivAlignSelf="stretch"
//         frameDivWidth="unset"
//         frameDivMargin="unset"
//         frameDivRight="unset"
//         frameDivLeft="unset"
//       />
//       <main className="self-stretch flex flex-col items-center justify-start  px-5 py-5 box-border relative gap-[40px] max-w-full text-left text-17xl text-white font-kanit   mq450:box-border mq750:gap-[20px_40px] mq1050:box-border">
//         <img
//           className="object-fill h-[250%] self-stretch w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden "
//           alt=""
//           src="/background-2@2x.png"
//         />
//         <div className="w-2/5 flex flex-row items-center justify-center max-w-full pt-10">
//           <h1 className="m-0 relative text-inherit leading-[31px] font-medium font-inherit z-[1] mq450:text-10xl mq450:leading-[41px] mq1050:text-19xl mq1050:leading-[54px]">
//             Registration
//           </h1>
//         </div>
//         <FormProvider {...methods}>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="m-0 mq450:w-full mq750:w-full w-2/5 rounded-xl bg-white flex flex-col items-center justify-start p-8   box-border gap-3 max-w-full z-[1] mq750:py-[39px] mq750:px-[30px] mq750:box-border"
//           >
//             {success && (
//               <SuccessComponent
//                 successMessage={"User successfully registered."}
//               />
//             )}
//             <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-[3px] px-2 border-[1px] border-solid border-grey-7">
//               <CustomInput
//                 name="name"
//                 placeholder="Full Name*"
//                 type="text"
//                 validationRules={{ required: "Full Name field is required" }}
//               />
//             </div>
//             {errors.name && <ErrorComponent errorMessage={errors.name.message} />}
//             <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-[3px] px-2 border-[1px] border-solid border-grey-7">
//               <CustomInput
//                 name="email"
//                 placeholder="Email*"
//                 type="text"
//                 validationRules={{
//                   required: "Email field is required",
//                   pattern: {
//                     value:
//                       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                     message: "Please write a valid email",
//                   },
//                 }}
//               />
//             </div>
//             {errors.email && <ErrorComponent errorMessage={errors.email.message} />}
//             <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-[3px] px-2 border-[1px] border-solid border-grey-7">
//               <CustomInput
//                 name="password"
//                 placeholder="Password*"
//                 type="password"
//                 validationRules={{
//                   required: "Password field is required",
//                   minLength: {
//                     value: 8,
//                     message: "Password field must be at least 8 characters long",
//                   },
//                   pattern: {
//                     value:
//                       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//                     message:
//                       "Password field must contain at least one letter, one number, and one special character",
//                   },
//                 }}
//               />
//             </div>
//             {errors.password && <ErrorComponent errorMessage={errors.password.message} />}
//             <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start py-[3px] px-2 border-[1px] border-solid border-grey-7">
//               <CustomInput
//                 name="confirmPassword"
//                 placeholder="Confirm Password*"
//                 type="password"
//                 validationRules={{
//                   required: "Confirm Password field is required",
//                   validate: (value: any) =>
//                     value === password || "The password and confirm password fields must match",
//                 }}
//               />
//             </div>
//             {errors.confirmPassword && <ErrorComponent errorMessage={errors.confirmPassword.message} />}
//             <img className="h-6 w-6 relative" alt="" src={loading ? "load.gif" : "/search_normal.svg"} />
//             <Button1 button="Register" />

//             {error && <ErrorComponent errorMessage={error} />}
//             <div className="cursor-pointer [border:none] py-0 px-[0px]  self-stretch rounded-3xs overflow-hidden  text-blue-2  text-center hover:text-cyan-500">
//               <a
//                 href="/login"
//                 className="m-0 p-0 text-base align-baseline bg-transparent underline-none text-current"
//               >
//                 Already Registered User? Click here to login
//               </a>
//             </div>
//           </form>
//         </FormProvider>
//       </main>
//     </div>
//   );
// };

// export default Registration;
'use client';
import type { NextPage } from 'next';
import TopHeader from '@/components/top-header';
import Button1 from '@/components/button1';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import ErrorComponent from '@/components/Errors/ErrorComponent';
import SuccessComponent from '@/components/Success/SuccessComponent';
import CustomInput from '@/components/Common/CustomInput';
import { useState } from 'react';
import axios from 'axios';

const Registration: NextPage = () => {
  const methods = useForm<FieldValues>(); // Initialize form methods
  const {
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = methods;
  const [loading, setLoading] = useState(false);
  const password = watch('password'); // Watch the password field
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (data: FieldValues) => {
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      console.log('Submitting:', data);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/signup`,
        {
          fullname: data.name,
          email: data.email,
          password: data.password,
        },
      );

      if (response.status === 201) {
        setSuccess('User successfully registered!');
        reset(); // Clear input fields
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }

    setLoading(false);
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-start justify-start bg-white tracking-[normal]"
      style={{
        backgroundImage: 'url("/background-2@2x.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <TopHeader />
      <main className="relative box-border flex max-w-full flex-col items-center justify-start gap-[40px] self-stretch px-5 py-5 text-left font-kanit text-17xl text-white">
        <div className="flex w-2/5 max-w-full flex-row items-center justify-center pt-10">
          <h1 className="relative m-0 text-inherit font-medium leading-[31px]">
            Registration
          </h1>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-0 flex w-2/5 max-w-full flex-col items-center justify-start gap-3 rounded-xl bg-white p-8"
          >
            {success && <SuccessComponent successMessage={success} />}
            <div className="flex flex-col items-start justify-start self-stretch overflow-hidden rounded-3xs border-[1px] border-solid border-grey-7 px-2 py-[3px]">
              <CustomInput
                name="name"
                placeholder="Full Name*"
                type="text"
                validationRules={{ required: 'Full Name field is required' }}
              />
            </div>
            {errors.name && (
              <ErrorComponent errorMessage={errors.name.message} />
            )}
            <div className="flex flex-col items-start justify-start self-stretch overflow-hidden rounded-3xs border-[1px] border-solid border-grey-7 px-2 py-[3px]">
              <CustomInput
                name="email"
                placeholder="Email*"
                type="text"
                validationRules={{
                  required: 'Email field is required',
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: 'Please write a valid email',
                  },
                }}
              />
            </div>
            {errors.email && (
              <ErrorComponent errorMessage={errors.email.message} />
            )}
            <div className="flex flex-col items-start justify-start self-stretch overflow-hidden rounded-3xs border-[1px] border-solid border-grey-7 px-2 py-[3px]">
              <CustomInput
                name="password"
                placeholder="Password*"
                type="password"
                validationRules={{
                  required: 'Password field is required',
                  minLength: {
                    value: 8,
                    message: 'Must be at least 8 characters',
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      'Must contain one letter, one number, and one special character',
                  },
                }}
              />
            </div>
            {errors.password && (
              <ErrorComponent errorMessage={errors.password.message} />
            )}
            <div className="flex flex-col items-start justify-start self-stretch overflow-hidden rounded-3xs border-[1px] border-solid border-grey-7 px-2 py-[3px]">
              <CustomInput
                name="confirmPassword"
                placeholder="Confirm Password*"
                type="password"
                validationRules={{
                  required: 'Confirm Password field is required',
                  validate: (value: any) =>
                    value === password || 'Passwords must match',
                }}
              />
            </div>
            {errors.confirmPassword && (
              <ErrorComponent errorMessage={errors.confirmPassword.message} />
            )}
            <img
              className="relative h-6 w-6"
              alt=""
              src={loading ? 'load.gif' : '/search_normal.svg'}
            />
            <Button1 button="Register" />
            {error && <ErrorComponent errorMessage={error} />}
            <div className="cursor-pointer text-center text-base text-blue-2 text-current hover:text-cyan-500">
              <a href="/login">Already Registered? Click here to login</a>
            </div>
          </form>
        </FormProvider>
      </main>
    </div>
  );
};

export default Registration;
