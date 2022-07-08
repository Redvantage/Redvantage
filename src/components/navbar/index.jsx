import React from "react";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../Connecters";

const Navbar = () => {
  const { activate, deactivate, account } = useWeb3React();
  return (
    <nav className="flex items-center justify-between py-6 px-4 lg:px-16 xl:px-32 ">
      <Link href="/">
        <img className="cursor-pointer" src="./logo.png" alt="" />
      </Link>
      <div>
        {account ? (
          <button
            onClick={() => deactivate()}
            className="rounded hover:bg-[#FFDF0C] hover:text-black py-2 px-4 text-[#FFDF0C] border border-[#FFDF0C]"
          >
            Disconnect Wallet
          </button>
        ) : (
          <button
            onClick={() => activate(injected)}
            className="rounded hover:bg-[#FFDF0C] hover:text-black py-2 px-4 text-[#FFDF0C] border border-[#FFDF0C]"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
