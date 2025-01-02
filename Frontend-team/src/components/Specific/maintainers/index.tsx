import { ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from "./Sidebar"
import { useState } from "react"
import Sidebarbtn from "./Sidebarbtn"
import { links } from "./links";
import Tasks from "./Tasks";
import Team from "./Team";
import Payments from "./Payments";
import Analytics from "./Analytics";
import Applications from "./Applications";
const Maintainer = () => {
  const [openSide, setOpenSide] = useState(false)
  const [route, setLink] = useState(links[0].link);

  return (
    <main className="mt-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-grayBlue">
          <ChevronLeft size={16} /> Projects
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-grayBlue">Projects <ChevronRight size={16} /></div>
          <select name="" id="" className=" bg-opacity-10 bg-transparent rounded-md p-2 outline-none focus:outline-none focus:border-none optional:bg-opacity-20 optional:bg-grayBlue">
            <option value="" className="text-black">All</option>
            <option value="" className="text-black">Decentralized Voting Platform</option>
            <option value="">All</option>
          </select>
        </div>
      </div>
      <div className="flex mt-20 gap-5">
        <div className="min-w-80">
          {!openSide ? <Sidebar setOpenSide={setOpenSide} setLink={setLink} /> : <Sidebarbtn setOpenSide={setOpenSide} />}
        </div>
        <div className="">
          {route === "tasks"? <Tasks/>: route === "team"? <Team/>: route === "payments"? <Payments/>: route === "analytics"? <Analytics/>: <Applications/>}
        </div>
      </div>

    </main>
  )
}

export default Maintainer
