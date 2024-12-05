import { Dispatch, SetStateAction, useState} from "react";
import Input from "../Input";
import { Button } from "@/components/ui/button";
import gitHubIcon from "../../../../assets/icons/githubIcon.svg"
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import formStyles from "./formStyles";
import { nextStep, prevStep } from "@/store/reducers/onboardingIndex";
import { updateField } from "@/store/reducers/onboarding";


export const SecondScreen = () => {
//   const [active, setActive] = useState<string | null>(null);
const { user} = useSelector((state: RootState) => state.auth);
const [secondInfo, setSecondInfo] = useState({
  email:"",
})
// const onboardingInfo = useSelector((state: RootState) => state.onboarding);
const dispatch = useDispatch();
  /**
   * SecondScreen component.
   *
   * This component renders the second screen of the onboarding flow.
   * It renders a brief overview, two inputs for the user's GitHub account and personal email,
   * and a call-to-action button.
   *
   * The component is responsive and scales according to the screen size.
   *
   * @returns {JSX.Element} The component JSX
   */
  // const [userInfo, setuserInfo] = useState(user)

  return (
    <div className={formStyles.container}>
      <div className={formStyles.headWrapper}>
        <h1 className={formStyles.title}>Verify information</h1>
        <p className={formStyles.desc}>
          To create your account, we need some basic information
        </p>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-center items-center rounded-sm w-20 h-20 overflow-hidden">
          <img src={user?.photoURL || gitHubIcon} alt="GitHub Icon" className="object-cover rounded-2xl" />
        </div>
        <Input title="GitHub Account" placeholder="surname" value={user?.displayName}  onChange={(e:any) => {console.log(e.target.value)}}/>
      </div>
      <hr className="border-border border  border-opacity-5" />
      <Input title="Personal Email" placeholder="noyinoyi@gmail.com" value={user?.email} onChange={(e:any) => {console.log(e.target.value)}}/>

      <div className={formStyles.btnGroup}>
        <Button
          onClick={() => dispatch(prevStep())}
          variant={"outline"}
          className="w-full p-6 bg-white rounded-full font-normal text-base"
        >
          Back
        </Button>
        <Button
          onClick={() => { dispatch(nextStep())}}
          variant={"secondary"}
          className="w-full p-6 rounded-full font-normal text-base"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
