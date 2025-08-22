// import type { NextPage } from 'next';
// import TopHeader from '../components/top-header';
// import {
//   SubmitHandler,
//   useForm,
//   FieldValues,
//   FormProvider,
// } from 'react-hook-form';
// import { useState, useEffect } from 'react';
// import Button1 from '../components/button1';
// import ErrorComponent from '@/components/Errors/ErrorComponent';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import CustomInput from '@/components/Common/CustomInput';
// import axios from 'axios';

// type LoginMail = {
//   email: string;
//   password: string;
// };

// const Login: NextPage = () => {
//   const methods = useForm<LoginMail>(); // Create form methods
//   const {
//     handleSubmit,
//     formState: { errors },
//   } = methods;
//   const [error, setError] = useState('');
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   // const onSubmit: SubmitHandler<LoginMail> = async (data) => {
//   //   let email = data.email;
//   //   let password = data.password;

//   //   try {
//   //     setLoading(true);

//   //     const res = await signIn("credentials", {
//   //       email,
//   //       password,
//   //       redirect: false,
//   //       callbackUrl: "/",
//   //     });
//   //     if (res?.error) {
//   //       if (res?.error === "CredentialsSignin") {
//   //         setError("Invalid email or password");
//   //         setLoading(false);
//   //       } else setError("Required field is missing");
//   //       return;
//   //     }

//   //     setLoading(false);

//   //     router.replace("/");
//   //   } catch (err) {
//   //     setError("An error occurred during sign-in:");
//   //   }
//   // };
//   const onSubmit: SubmitHandler<LoginMail> = async (data) => {
//     setLoading(true);
//     setError('');

//     try {
//       // Send login data to your backend
//       const response = await axios.post('http://localhost:5000/api/login', {
//         email: data.email,
//         password: data.password,
//       });
//       // console.log('login-response', response.data);
//       console.log('login-response token', response.data.token);
//       if (response.data) {
//         // Save token (if any)
//         localStorage.setItem('token', response.data.token);

//         // Redirect user after successful login
//         router.replace('/');
//       } else {
//         setError(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div
//       className="relative flex min-h-screen w-full flex-col items-start justify-start bg-white tracking-[normal]"
//       style={{
//         backgroundImage: 'url("/background-2@2x.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <TopHeader
//         frameDivAlignSelf="stretch"
//         frameDivWidth="unset"
//         frameDivMargin="unset"
//         frameDivRight="unset"
//         frameDivLeft="unset"
//       />
//       <main className="relative box-border flex max-w-full flex-col items-center justify-start gap-[40px] self-stretch px-5 py-5 text-left font-kanit text-17xl text-white mq1050:box-border mq1050:pb-[101px] mq1050:pt-[102px] mq750:gap-[20px_40px] mq450:box-border mq450:pb-[66px] mq450:pt-[66px]">
//         <img
//           className="absolute bottom-[0px] left-[0px] right-[0px] top-[0px] !m-[0] h-[200%] w-full self-stretch overflow-hidden object-fill"
//           alt=""
//           src="/background-2@2x.png"
//         />
//         <div className="flex w-2/5 max-w-full flex-row items-center justify-center pt-10">
//           <h1 className="relative z-[1] m-0 font-inherit text-inherit font-medium leading-[31px] mq1050:text-19xl mq1050:leading-[54px] mq450:text-10xl mq450:leading-[41px]">
//             Login
//           </h1>
//         </div>

//         <FormProvider {...methods}>
//           <form
//             action="/api/auth/callback/credentials"
//             onSubmit={handleSubmit(onSubmit)}
//             className="z-[1] m-0 box-border flex w-2/5 max-w-full flex-col items-center justify-start gap-3 rounded-xl bg-white p-8 mq750:box-border mq750:w-full mq750:px-[30px] mq750:py-[39px] mq450:w-full"
//           >
//             <div className="flex max-w-full flex-row items-center justify-start self-stretch mq750:gap-[48px_24px]">
//               <div className="box-border flex max-w-full flex-1 flex-col items-start justify-start overflow-hidden rounded-3xs border-[1px] border-solid border-grey-7 px-[8px] py-[8px]">
//                 <CustomInput
//                   name="email"
//                   placeholder="Email Id*"
//                   type="text"
//                   validationRules={{
//                     required: true,
//                     pattern:
//                       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                   }}
//                 />
//               </div>
//             </div>
//             {errors.email && errors.email.type === 'required' && (
//               <ErrorComponent errorMessage={'This field is required'} />
//             )}
//             {errors.email && errors.email.type === 'pattern' && (
//               <ErrorComponent errorMessage={'Please write a valid email'} />
//             )}
//             <div className="flex max-w-full flex-row items-center justify-start self-stretch mq750:gap-[48px_24px]">
//               <div className="box-border flex max-w-full flex-1 flex-col items-start justify-start overflow-hidden rounded-3xs border-[1px] border-solid border-grey-7 px-[8px] py-[8px]">
//                 <CustomInput
//                   name="password"
//                   placeholder="Password*"
//                   type="password"
//                   validationRules={{ required: true }}
//                 />
//               </div>
//             </div>
//             {errors.password && errors.password.type === 'required' && (
//               <ErrorComponent errorMessage={'This field is required'} />
//             )}
//             <img
//               className="relative h-6 w-6"
//               alt=""
//               src={loading ? 'load.gif' : '/search_normal.svg'}
//             />
//             <Button1 button="Login" propWidth="46px" propMinWidth="46px" />
//             {error && <ErrorComponent errorMessage={error} />}
//             <div className="cursor-pointer self-stretch overflow-hidden rounded-3xs px-[0px] py-0 text-center text-blue-2 [border:none] hover:text-cyan-500">
//               <a
//                 href="/registration"
//                 className="underline-none m-0 bg-transparent p-0 align-baseline text-base text-current"
//               >
//                 Don't have an account yet? Sign Up
//               </a>
//             </div>
//           </form>
//         </FormProvider>
//       </main>
//     </div>
//   );
// };

// export default Login;
import type { NextPage } from 'next';
import TopHeader from '../components/top-header';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import Button1 from '../components/button1';
import ErrorComponent from '@/components/Errors/ErrorComponent';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import CustomInput from '@/components/Common/CustomInput';
import axios from 'axios';
import { useSession } from 'next-auth/react'; // Import useSession
import jwt from 'jsonwebtoken';

type LoginMail = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const methods = useForm<LoginMail>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const [error, setError] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginMail> = async (data) => {
    setLoading(true);
    setError('');
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/login`,
      {
        email: data.email,
        password: data.password,
      },
    );

    // const res = await signIn("credentials", {
    //   email: data.email,
    //   password: data.password,
    //   redirect: false,
    // });

    console.log('SignIn Response:', response);
    console.log('SignIn Response:', response.data);
    console.log('name:', response.data.user.fullname);

    if (response.status === 200 && response.data.user) {
      localStorage.setItem(
        'username',
        JSON.stringify(response.data.user.fullname),
      );
      localStorage.setItem('token', response.data.token);
      router.replace('/');
    } else {
      setError('Invalid credentials or error occurred');
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
      {/* Pass session data to TopHeader */}
      <TopHeader
        frameDivAlignSelf="stretch"
        frameDivWidth="unset"
        frameDivMargin="unset"
        frameDivRight="unset"
        frameDivLeft="unset"
      />

      <main className="relative box-border flex max-w-full flex-col items-center justify-start gap-[40px] self-stretch px-5 py-5 text-left font-kanit text-17xl text-white">
        <img
          className="absolute bottom-0 left-0 right-0 top-0 h-[200%] w-full object-cover"
          alt=""
          src="/background-2@2x.png"
        />

        <div className="flex w-2/5 max-w-full flex-row items-center justify-center pt-10">
          <h1 className="relative z-[1] m-0 font-inherit text-inherit font-medium leading-[31px]">
            Login
          </h1>
        </div>

        <FormProvider {...methods}>
          <form
            action="/api/auth/callback/credentials"
            onSubmit={handleSubmit(onSubmit)}
            className="z-[1] m-0 flex w-2/5 flex-col items-center justify-start gap-3 rounded-xl bg-white p-8"
          >
            <div className="flex w-full flex-row items-center justify-start">
              <div className="w-full rounded-3xs border border-solid border-grey-7 px-[8px] py-[8px]">
                <CustomInput
                  name="email"
                  placeholder="Email Id*"
                  type="text"
                  validationRules={{
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  }}
                  onChange={(e) => methods.setValue('email', e.target.value)} // Add this line
                />
              </div>
            </div>
            {errors.email && (
              <ErrorComponent errorMessage="Email is required" />
            )}

            <div className="flex w-full flex-row items-center justify-start">
              <div className="w-full rounded-3xs border border-solid border-grey-7 px-[8px] py-[8px]">
                <CustomInput
                  name="password"
                  placeholder="Password*"
                  type="password"
                  validationRules={{ required: true }}
                  onChange={(e) => methods.setValue('password', e.target.value)} // Add this line
                />
              </div>
            </div>
            {errors.password && (
              <ErrorComponent errorMessage="Password is required" />
            )}

            <img
              className="h-6 w-6"
              alt=""
              src={loading ? 'load.gif' : '/search_normal.svg'}
            />

            <Button1 button="Login" propWidth="46px" propMinWidth="46px" />
            {error && <ErrorComponent errorMessage={error} />}

            <div className="text-container cursor-pointer text-base text-blue-2 hover:text-cyan-500">
              <a href="/registration">Don't have an account yet? Sign Up</a>
            </div>
          </form>
        </FormProvider>
      </main>
    </div>
  );
};

export default Login;
