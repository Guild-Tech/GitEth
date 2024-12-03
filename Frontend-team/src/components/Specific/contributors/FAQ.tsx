import { Button } from "@/components/ui/button"
import FAQList from "./FAQList"
import upright from "../../../assets/icons/uprightarrow.svg"
export const FAQ = () => {
  return (
    <div className="">
        <div className="flex justify-between items-center mb-7">
            <h2 className="text-4xl font-medium">FAQs</h2>
            <Button className="rounded-full text-base max-sm:hidden">Still Have Questions</Button>
        </div>
        <div className="flex flex-col gap-7">
            <FAQList />
            <FAQList />
            <FAQList />
            <Button className="rounded-full text-base hidden max-sm:flex py-3 px-4">Still Have Questions </Button>
            <div className="max-sm:flex hidden border justify-center gap-3 border-border w-full rounded-3xl py-3 px-4  bg-[#293056] bg-opacity-20  backdrop-blur-3xl items-center">
                <p className="">Read our Community Guidelines</p>
                <img src={upright} alt="" className="" />
              </div>
        </div>
    </div>
  )
}
