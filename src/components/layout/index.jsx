import Head from "next/head";
import React from "react";

//Components
import Footer from "../footer";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="h-fit min-h-screen bg-[#0515B6]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
