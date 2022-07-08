import React from "react";
import ProjectTable from "../components/ProjectTable";
import UpcomingPools from "../components/upcomingPools";
import Header from "../components/featuredHeader";

const Home = () => {
  return (
    <div className="h-fit">
      <Header />
      <div className=" px-4 lg:px-16 xl:px-32 ">
        <UpcomingPools />
        <ProjectTable />
      </div>
    </div>
  );
};

export default Home;
