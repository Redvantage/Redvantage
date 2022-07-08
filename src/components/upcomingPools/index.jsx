import React from "react";
import UpcomingCard from "../UI/upcomingCard";
import { UpcomingPool } from "../Data";

const UpcomingPools = () => {
  return (
    <div className="py-6">
      <h2 className="text-2xl py-6 font-bold">Upcoming Pool</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8">
        {UpcomingPool.map((item) => (
            <UpcomingCard key={item.id} {...item} />
            ))}
      </div>
    </div>
  );
};

export default UpcomingPools;
