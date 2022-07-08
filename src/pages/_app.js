//Component
import Layout from "../components/layout";
import "../styles/globals.css";

import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
