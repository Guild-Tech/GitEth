import { useEffect, useState } from "react";
import ExploreProjec from "../../components/Specific/exploreProjects/ExploreProjec";
import Filter from "../../components/Specific/exploreProjects/Filter";
import Newest from "../../components/Specific/exploreProjects/Newest";

import Filterbtn from "../../components/Specific/exploreProjects/Filterbtn";
import Maintainer from "@/components/Specific/maintainers";

const ExploreProjecs = () => {
  const [openSide, setOpenSide] = useState(false);
  const [isMaintainer, setIsMaintainer] = useState(true);
  useEffect(() => {
    setIsMaintainer(true);
  }, []);

  return (
    <div className="container max-sm:mx-auto max-sm:gap-0 w-full min-h-[100vh] max-sm:p-0 mx-auto relative z-30 mt-12 ">
      {isMaintainer ? (
        <section className="  ">
          <ExploreProjec />
          <main className=" flex gap-4 justify-between max-sm:gap-0 ">
            {!openSide ? (
              <Filter setOpenSide={setOpenSide} />
            ) : (
              <Filterbtn setOpenSide={setOpenSide} />
            )}

            <Newest />
          </main>
        </section>
      ) : (
        <section className="max-sm:mx-auto max-sm:gap-0 w-full min-h-[100vh] max-sm:p-0 mx-auto relative z-30 mt-15 pt-9">
          <Maintainer />
        </section>
      )}
    </div>
  );
};

export default ExploreProjecs;
