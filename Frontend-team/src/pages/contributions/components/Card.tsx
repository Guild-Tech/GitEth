import CustomBtn from "@/components/CustomBtn";
import inon from "../../../assets/icons/diamond.png"
import clend from "../../../assets/icons/calender.svg";
import { Button } from "@/components/ui/button";
import uparrow from "../../../assets/icons/upArrow.svg"
import discordLight from "../../../assets/icons/discordlight.svg";
export default function Card() {
  return (
    <div className="border border-border rounded-3xl p-8 w-full bg-[#293056] bg-opacity-20  backdrop-blur-3xl">
        <div className="flex justify-end">

         <p className="items-center text-xs text-grayBlue gap-2 mb-3 hidden max-sm:flex text-center">
            <img src={clend} alt="" className="w-[12px]" />
            A few seconds ago
        </p>
        </div>
      <div className="flex gap-3 mb-5 max-sm:justify-evenly">
        <CustomBtn text="Noyi24_7" colored="yes" style="w-fit " iconStyle="w-[16px] rounded-full" icon={inon} />
        <Button className="text-sm  text-white  rounded-full border border-border hover:text-black bg-[#15182b] ">Design</Button>
        <Button className="text-sm  text-white  rounded-full border border-border hover:text-black bg-[#101323] ">NFT</Button>
        <p className="flex items-center text-xs text-grayBlue gap-2 mb-2 max-sm:hidden">
            <img src={clend} alt="" className="w-[12px]" />
            A few seconds ago
        </p>
      </div>
      <div className="">
        <h2 className="text-2xl font-medium mb-3">DeFi Protocol Enhancement</h2>
        <p className="text-base text-grayBlue">
            Help improve the security and scalability of a cutting-edge decentralized finance protocol. 
            Collaborate with experienced developers to optimize smart contracts and create robust security measures.
        </p>
      </div>
      <div className="flex justify-between items-center mt-5 max-sm:flex-col max-sm:gap-3">
        <Button className="text-sm max-sm:w-full  text-white  rounded-full border border-border hover:text-black bg-[#15182b] flex items-center"><img src={uparrow} alt="" className="" /> Upvote (13)</Button>
        <CustomBtn text={`Join Discord`} colored="yes" style="w-fit max-sm:w-full " iconStyle="w-[16px] rounded-full" icon={discordLight} />
      </div>
    </div>
  )
}
