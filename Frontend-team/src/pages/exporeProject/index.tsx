import { useEffect, useState } from "react";
import ExploreProjec from "../../components/Specific/exploreProjects/ExploreProjec";
import Filter from "../../components/Specific/exploreProjects/Filter";
import Newest from "../../components/Specific/exploreProjects/Newest";

import Filterbtn from "../../components/Specific/exploreProjects/Filterbtn";
import Maintainer from "@/components/Specific/maintainers";
import { Button } from "@/components/ui/button";
// import CreateProject from "@/components/Specific/maintainers/Modal/CreateProject";
import CreateProjectModal from "@/components/Specific/maintainers/CreateProjectModal";
import axios from "axios";
import CreateProject from "@/components/Specific/maintainers/Modal/CreateProject";
// import Metrics from "@/components/Specific/maintainers";
// import Metrics from "@/components/Specific/maintainers";
// import Metrics from "@/components/Specific/maintainers";


const ExploreProjecs = () => {
  const [openSide, setOpenSide] = useState(false);
  const [isMaintainer, setIsMaintainer] = useState(true);
  const [isManageProjects, setIsManageProjects] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalSubmit = async(formData: FormData) => {
    // console.log(formData)
    // console.log(`Bearer ${localStorage.getItem('token')}`)
    const token = localStorage.getItem('authToken');
    console.log(token)
    const response = await axios.post(`https://ethopensource.onrender.com/project/create-project?token=${token}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: ` ${localStorage.getItem('token')}`, // Include auth token if required
      },
    });
   console.log(response)
  };
  useEffect(() => {
    setIsMaintainer(true);
  }, [])

  return (
    <div className="container max-sm:mx-auto max-sm:gap-0 w-full min-h-[100vh] max-sm:p-0 mx-auto relative z-30 mt-12 ">
      {!isMaintainer ?
        <section className="  ">
          <div className="flex items-center justify-between mt-16 gap-5">
          <ExploreProjec />
          </div>
          <main className=" flex gap-4 justify-between">
            {!openSide ? (
              <Filter setOpenSide={setOpenSide} />
            ) : (
              <Filterbtn setOpenSide={setOpenSide} />
            )}

            <Newest />
          </main>
        </section> : !isManageProjects ?  (<section className="  ">
          <div className="flex items-center justify-between mt-16">
            <ExploreProjec />
            <div className="flex gap-4 items-center">
              {/* <Button variant={"default"} className="rounded-full" onClick={() => setIsModalOpen(true)}>Create New Project</Button> */}
              
              <CreateProject/>
                {isModalOpen && <CreateProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit}/>}
              <Button variant={"outline"} className="rounded-full" onClick={() => setIsManageProjects(!isManageProjects)}>Manage my Projects</Button>
            </div>
          </div>
          <main className=" flex gap-4 justify-between">
            {!openSide ? (
              <Filter setOpenSide={setOpenSide} />
            ) : (
              <Filterbtn setOpenSide={setOpenSide} />
            )}

            <Newest />
          </main>
          
        </section>): <Maintainer /> 
      }
    </div>

  );
};

export default ExploreProjecs;
