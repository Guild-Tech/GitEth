
export const CarouselCard = (props:any) => {
  return (
    <div className="sm:backdrop-blur-md w-full border border-border  overflow-hidden rounded-3xl sm:h-[500px] max-sm:mt-5 flex items-center justify-center gap-3 flex-wrap">
    <div className="flex p-3 max-sm:flex-col max-sm:my-2 max-sm:mx-4">
      <p className="bg-white max-sm:my-3  text-black text-2xl w-10 h-9 max-sm:w-8 max-sm:h-8 rounded-full flex items-center justify-center mr-7 max-sm:mr-3 max-sm:text-base ">{props.id}</p>
      <div className="">
        <h2 className="text-[32px] text-white max-sm:text-2xl max-sm:font-normal max-sm:mb-2">{props.title}</h2>
        <p className="text-grayBlue text-xl max-w-[536px] max-sm:text-base">{props.description}</p>
      </div>
    </div>
    <div 
    // className="border  border-border rounded-3xl p-6 transition-all ease-in-out hover:mb-0 -mb-24 max-sm:-mb-12 bg-[#D0D5DD] bg-opacity-5 backdrop-blur-lg max-w-[480px] max-sm:w-full max-sm:mx-4 w-full flex items-center flex-col"
    >
        <img src={props.image} alt={props.title}  className="w-full"/>
    </div>
  </div>
  )
}
