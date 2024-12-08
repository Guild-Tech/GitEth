import right from "../../../assets/images/💜 Right Icon.png";

const Open = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-[20px] shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center">
          <h2 className="text-[28px] font-medium leading-[33.6px]">Proposal</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black h-[28px] w-[28px] border border-[#E8D07A,#5312D6] rounded-[20px] flex items-center justify-center"
          >
            <img
              src={right}
              alt=""
              className="  border border-transparent  rounded-[20px] custom-gradient-border"
            />
          </button>
        </div>
        <p className="mt-4 text-sm">
          Help improve the security and scalability of a cutting-edge
          decentralized finance protocol.
        </p>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#9DA4AE]">
              How Would You Approach the Project
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-[20px] p-2 mt-1 text-black"
              placeholder="Tell us something..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#9DA4AE]">
              Relevant Experience or Background
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-[20px]  p-2 mt-1 text-black"
              placeholder="Tell us about what you've done..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#9DA4AE]">
              Anything Else
            </label>
            <input
              type="text"
              className="w-full border border-gray-300  p-2 mt-1 text-black rounded-[20px]"
              placeholder="Add a link to your website or something"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black  text-white py-2 rounded-[20px]"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Open;
