import usdt from "../../../assets/images/usdt.png";
import image from "../../../assets/images/Ellipse 4 (1).png";
import image2 from "../../../assets/images/Ellipse 4.png";
import imag from "../../../assets/images/Ellipse 4(1).png";
import img from "../../../assets/images/Ellipse 4(2).png";

const Carditems3 = () => {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2 w-fit h-[32px] bg-[#0D0F1C] rounded-[26px] p-1  ">
          <img src={img} alt="Avatar" className="" />
          <p>Noyi_24_7</p>
        </div>
        <div className="mt-4 space-y-6  ">
          <div className="flex justify-between ">
            <span>Role:</span>
            <span className="text-white">Designer</span>
          </div>

          <div className="flex justify-between ">
            <span>Contributions:</span>
            <span className="text-white">50</span>
          </div>

          <div className="flex justify-between items-center">
            <span>Earnings:</span>
            <div className="flex items-center gap-1">
              <img src={usdt} alt="USDT" />
              <span className=" text-[14px]">15,000 USDT</span>
            </div>
          </div>
          <div className="border border-[#293056]"></div>
        </div>
      </div>
      <div className="flex items-center gap-2 w-fit h-[32px] bg-[#0D0F1C] rounded-[26px] p-1  ">
        <img src={imag} alt="Avatar" className=" " />
        <p>Vhee</p>
      </div>
      <div className="mt-4 space-y-6  ">
        <div className="flex justify-between ">
          <span>Role:</span>
          <span className="text-white">Developer</span>
        </div>

        <div className="flex justify-between ">
          <span>Contributions:</span>
          <span className="text-white">45</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Earnings:</span>
          <div className="flex items-center gap-1">
            <img src={usdt} alt="USDT" />
            <span className="text-[14px] ">10,000 USDT</span>
          </div>
        </div>
        <div className="border border-[#293056]"></div>
      </div>

      <div className="flex items-center gap-2 w-fit h-[32px] bg-[#0D0F1C] rounded-[26px] p-1  ">
        <img src={image} alt="Avatar" className=" " />

        <p>Fufu</p>
      </div>
      <div className="mt-4 space-y-6  ">
        <div className="flex justify-between ">
          <span>Role:</span>
          <span className="text-white">Designer</span>
        </div>

        <div className="flex justify-between ">
          <span>Contributions:</span>
          <span className="text-white">15</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Earnings:</span>
          <div className="flex items-center gap-1">
            <img src={usdt} alt="USDT" />
            <span className=" text-[14px]">10,500 USDT</span>
          </div>
        </div>
        <div className="border border-[#293056]"> </div>
      </div>
      <div className="flex items-center gap-2 w-fit h-[32px] bg-[#0D0F1C] rounded-[26px] p-1  ">
        <img src={image2} alt="Avatar" className=" " />

        <p>Aj</p>
      </div>
      <div className="mt-4 space-y-6  ">
        <div className="flex justify-between ">
          <span>Role:</span>
          <span className="text-white">Designer</span>
        </div>

        <div className="flex justify-between ">
          <span>Contributions:</span>
          <span className="text-white">12</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Earnings:</span>
          <div className="flex items-center gap-1">
            <img src={usdt} alt="USDT" />
            <span className=" text-[14px]">9,500 USDT</span>
          </div>
        </div>
        <div className="border border-[#293056]"> </div>
      </div>
    </div>
  );
};

export default Carditems3;
