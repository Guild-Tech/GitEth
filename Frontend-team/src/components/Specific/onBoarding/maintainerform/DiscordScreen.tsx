
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import formStyles from "../contributorForm/formStyles";
import { nextStep } from "@/store/reducers/onboardingIndex";
import { Button } from "@/components/ui/button";
import discords from '../../../../assets/icons/discords.svg';
import logos from "../../../../assets/icons/logos.svg";
import sync from  "../../../../assets/icons/sync.svg";
import marked from "../../../../assets/icons/mark-success.svg";
import discordDark from "../../../../assets/icons/discordDark.svg";


/**
 * FirstScreen component.
 *
 * This component renders the first screen of the onboarding flow.
 * It renders a brief overview, a list of two options, and a call-to-action button.
 *
 * The component is responsive and scales according to the screen size.
 *
 * @param {FirstScreenProps} props The component props
 * @returns {JSX.Element} The component JSX
 */


export const DiscordScreen = () => {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.auth);


  return (
    <div className="sm:bg-white flex flex-col gap-4 sm:shadow-xl rounded-[16px] ">
      <div className='p-6 max-sm:px-0'>
        <div className="flex items-center justify-center gap-3 my-7">
          <img src={logos} alt="" className="" />
          <img src={sync} alt="" className="" />
          <img src={discords} alt="" className="" />
        </div>
        <h1 className={`${formStyles.title} font-kern text-center`}>Connect Eth Open Source to Discord</h1>
        <p className={`${formStyles.desc} text-center`}>
          Welcome, please authenticate with your discord account.
        </p>
      </div>
      <div className="flex flex-col gap-4 border-b border-t border-opacity-20 border-border p-6  max-sm:px-0 max-sm:mb3 items-center">
        <h3 className="text-center w-fit text-2xl font-medium">Eth Open Source would like to</h3>
        <p className=" flex items-center gap-3"><img src={marked} alt="" className="" /> <span className="">Connect with discord to link your contributions.</span></p>
        <p className=" flex items-center gap-3"><img src={marked} alt="" className="" /> <span className="">Sync your discord to join projects seamlessly.</span></p>
      </div>
      <div className="p-6  max-sm:px-0">
        <Button
          onClick={() => dispatch(nextStep())}
          variant={"secondary"}
          disabled={user === null}
          // onClickCapture={()=> dispatch(nextStep())}
          className="w-full p-6 rounded-full font-normal text-base"
        >
          <img src={discordDark} alt="" className="" />
          Connect to Discord
        </Button>
      </div>
    </div>
  );
};
