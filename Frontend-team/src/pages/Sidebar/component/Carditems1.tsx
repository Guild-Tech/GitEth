import elish from "../../../assets/images/Ellipse 5.png";
import elis2 from "../../../assets/images/Ellipse 5 (1).png";
import usdt from "../../../assets/images/usdt.png";
import image from "../../../assets/images/Ellipse 4 (1).png";
import image2 from "../../../assets/images/Ellipse 4.png";
import { useNavigate } from "react-router-dom";

const Carditems1 = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="w-full h-[140px] rounded-[16px] border border-[#293056] mt-8 p-8    gap-2 max-sm:p-4 max-sm:w-[500px] ">
        <h3 className="w-[799px] h-[29px] font-kern text-[24px] font-medium leading-[28.8px] ml-1">
          Project Leads
        </h3>
        <div className="flex mt-4 gap-2">
          <p className="rounded-[20px] border border-[#293056] w-[120px] h-[40px] bg-[#0D0F1C] p-2 flex items-center gap-2">
            <img src={elish} alt="" /> Noyi24_7
          </p>
          <p className="rounded-[20px] border border-[#293056] w-[120px] h-[40px] bg-[#0D0F1C] p-2 flex items-center gap-2">
            <img src={elis2} alt="" className="" />
            Vhee
          </p>
        </div>
      </div>
      <div className="w-full h-[742px] border border-[#293056] mt-5 rounded-[20px] p-3  max-sm:w-full">
        <div className="w-full h-[710px] rounded-[20px] border border-[#293056] relative  shadow-md sm:rounded-lg ">
          <table className="w-full text-left rtl:text-right border-separate border-spacing-y-1 ">
            <thead className="text-sm  bg-[#0D0F1C] w-full h-[80px] rounded-[20px] ">
              <tr>
                <th className="py-3 px-4">Contributors</th>
                <th className="py-3 px-4">Roles</th>
                <th className="py-3 px-4">Contributions</th>
                <th className="py-3 px-4">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr
                className="w-full h-[80px] "
                onClick={() => {
                  navigate("/Profile");
                }}
              >
                <td className="rounded-[20px] border border-[#293056] w-[120px] h-[40px] bg-[#0D0F1C] p-2 flex items-center gap-2 mt-4">
                  <img src={elish} alt="" /> Noyi24_7
                </td>
                <td className="py-3 px-4">Designer</td>
                <td className="py-3 px-4">50</td>
                <td className="py-3 px-4">
                  <span className="flex items-center space-x-2">
                    <img src={usdt} alt="" />
                    <span>15,000 USDT</span>
                  </span>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="w-full h-[80px]">
                <td className="rounded-[20px] border border-[#293056] w-[120px] h-[40px] bg-[#0D0F1C] p-2 flex items-center gap-2 mt-4">
                  <img src={elis2} alt="" className="" />
                  Vhee
                </td>
                <td className="py-3 px-4">Developer</td>
                <td className="py-3 px-4">45</td>
                <td className="py-3 px-4">
                  <span className="flex items-center space-x-2">
                    <img src={usdt} alt="" />
                    <span>10,000 USDT</span>
                  </span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="w-full h-[80px]">
                <td className="rounded-[20px] border border-[#293056] w-[66px] h-[32px] bg-[#0D0F1C] p-2 flex items-center gap-2 mt-4">
                  <img src={image2} alt="" className="" />
                  Aj
                </td>
                <td className="py-3 px-4">Designer</td>
                <td className="py-3 px-4">12</td>
                <td className="py-3 px-4">
                  <span className="flex items-center space-x-2">
                    <img src={usdt} alt="" />
                    <span>9,500 USDT</span>
                  </span>
                </td>
              </tr>
              {/* Add more rows as needed */}
              <tr className="w-full h-[80px]">
                <td className="rounded-[20px] border border-[#293056] w-[84px] h-[32px] bg-[#0D0F1C] p-2 flex items-center gap-2 mt-4">
                  <img src={image} alt="" className="" />
                  Fufu
                </td>
                <td className="py-3 px-4">Android Developer</td>
                <td className="py-3 px-4">15</td>
                <td className="py-3 px-4">
                  <span className="flex items-center space-x-2">
                    <img src={usdt} alt="" />
                    <span>10,500 USDT</span>
                  </span>
                </td>
              </tr>
              <tr className="w-full h-[80px] ">
                <td className="rounded-[20px] border border-[#293056] w-[120px] h-[40px] bg-[#0D0F1C] p-2 flex items-center gap-2 mt-4">
                  <img src={elish} alt="" /> Noyi24_7
                </td>
                <td className="py-3 px-4">Designer</td>
                <td className="py-3 px-4">50</td>
                <td className="py-3 px-4">
                  <span className="flex items-center space-x-2">
                    <img src={usdt} alt="" />
                    <span>15,000 USDT</span>
                  </span>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="w-full h-[80px]">
                <td className="rounded-[20px] border border-[#293056] w-[120px] h-[40px] bg-[#0D0F1C] p-2 flex items-center gap-2 mt-4">
                  <img src={elis2} alt="" className="" />
                  Vhee
                </td>
                <td className="py-3 px-4">Developer</td>
                <td className="py-3 px-4">45</td>
                <td className="py-3 px-4">
                  <span className="flex items-center space-x-2">
                    <img src={usdt} alt="" />
                    <span>10,000 USDT</span>
                  </span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="w-full h-[80px]">
                <td className="rounded-[20px] border border-[#293056] w-[66px] h-[32px] bg-[#0D0F1C] p-2 flex items-center gap-2 mt-4">
                  <img src={image2} alt="" className="" />
                  Aj
                </td>
                <td className="py-3 px-4">Designer</td>
                <td className="py-3 px-4">12</td>
                <td className="py-3 px-4">
                  <span className="flex items-center space-x-2">
                    <img src={usdt} alt="" />
                    <span>9,500 USDT</span>
                  </span>
                </td>
              </tr>
              {/* Add more rows as needed */}
              <tr className="w-full h-[80px]">
                <td className="rounded-[20px] border border-[#293056] w-[84px] h-[32px] bg-[#0D0F1C] p-2 flex items-center gap-2 mt-4">
                  <img src={image} alt="" className="" />
                  Fufu
                </td>
                <td className="py-3 px-4">Android Developer</td>
                <td className="py-3 px-4">15</td>
                <td className="py-3 px-4">
                  <span className="flex items-center space-x-2">
                    <img src={usdt} alt="" />
                    <span>10,500 USDT</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Carditems1;
