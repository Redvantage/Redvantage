import React from "react";
import ProductDescription from "../components/productDescription";
import TokenHeader from "../components/TokenHeader";
import TokenmomicsTable from "../components/tokenomicsTable";

const SingleCard = () => {
  return (
    <div>
      <TokenHeader />
      <div className=" px-4 lg:px-16 xl:px-32 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <TokenmomicsTable />
        <ProductDescription />
      </div>
    </div>
  );
};

export default SingleCard;
