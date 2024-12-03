import { useState } from "react";
import ExploreProjec from "../../components/Specific/exploreProjects/ExploreProjec";
import Filter from "../../components/Specific/exploreProjects/Filter";
import Newest from "../../components/Specific/exploreProjects/Newest";

import Filterbtn from "../../components/Specific/exploreProjects/Filterbtn";

const ExploreProjecs = () => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <section className="container mx-auto  mt-12 p-20   min-h-[100vh] relative z-30 ">
      <ExploreProjec />
      <main className=" flex gap-4 justify-between">
        {!openSide ? (
          <Filter setOpenSide={setOpenSide} />
        ) : (
          <Filterbtn setOpenSide={setOpenSide} />
        )}
        <Newest />
      </main>
    </section>
  );
};

export default ExploreProjecs;
