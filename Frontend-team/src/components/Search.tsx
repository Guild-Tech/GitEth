import { SearchIcon } from "lucide-react"

export default function Search(props:{placeholder:string}) {
  return (
    <div className="flex p-4 items-center border border-[#293056] rounded-xl gap-3">
        {/* <img src={searchIcon} alt="search" className="" /> */}
        <SearchIcon className="text-grayBlue" />
        <input type="text" placeholder={props.placeholder} className="placeholder:text-grayBlue bg-transparent outline-none border-none hover:border-none hover:outline-none w-full focus:outline-none focus:border-none" />
    </div>
  )
}
