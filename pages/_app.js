import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Head>
        <title>AOI</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
