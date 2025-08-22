import { Fragment } from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider and useSession
import store from "@/store/slices/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>FlightGlow</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SessionProvider>
        <Provider store={store}>
          <ToastContainer />
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </Fragment>
  );
}

export default MyApp;
