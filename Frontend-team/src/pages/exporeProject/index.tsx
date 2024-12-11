import { useState } from "react";
import ExploreProjec from "../../components/Specific/exploreProjects/ExploreProjec";
import Filter from "../../components/Specific/exploreProjects/Filter";
import Newest from "../../components/Specific/exploreProjects/Newest";

import Filterbtn from "../../components/Specific/exploreProjects/Filterbtn";
import Filterbtn2 from "@/components/Specific/exploreProjects/Filtermobile";
import Filtermobile from "@/components/Specific/exploreProjects/Filtermobile";

const ExploreProjecs = () => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <div className="container max-sm:mx-auto max-sm:gap-0 w-full min-h-[100vh] max-sm:p-0 mx-auto relative z-30 mt-12 ">
      <section className="      ">
        <ExploreProjec />
        <main className=" flex gap-4 justify-between">
          {!openSide ? (
            <Filter setOpenSide={setOpenSide} />
          ) : (
            <Filterbtn setOpenSide={setOpenSide} />
          )}
          {/* {!openSide ? (
          <Filtermobile setOpenSide={setOpenSide} />
        ) : (
          <Filterbtn2 setOpenSide={setOpenSide} />
        )} */}
          <Newest />
        </main>
      </section>
    </div>
  );
};

export default ExploreProjecs;
