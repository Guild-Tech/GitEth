import { useState } from "react";
import { Button } from "@/components/ui/button";
import personIcon from "../../../../assets/icons/person.svg"
import maintainerIcon from "../../../../assets/icons/maintainer.svg"
import { OnboardingButton } from "../OnboardingCTAButton";
import { useNavigate } from "react-router-dom";
import formStyles from "./formStyles";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "@/store/reducers/onboardingIndex";
import { updateField } from "@/store/reducers/onboarding";


/**
 * SixthScreen component.
 *
 * This component renders the sixth screen of the onboarding flow.
 * It renders a brief overview, three options for the user's skill level,
 * and a call-to-action button.
 *
 * The component is responsive and scales according to the screen size.
 *
 * @returns {JSX.Element} The component JSX
 */
export const SixthScreen = () => {
  const [active, setActive] = useState<string | null>(null);
  const navigate = useNavigate();
 const dispatch = useDispatch();


  return (
    <div className={formStyles.container}>
      <div className={formStyles.headWrapper}> 
          <h1 className={formStyles.title}>Complete Your Profile 4/4</h1>
        <div className={formStyles.descWrapper}>
          <p className={formStyles.desc}>
            Provide additional information to help maintainers better match you
            with suitable projects.
          </p>
        </div>

      </div>
      <div className="flex flex-col gap-4">
        <OnboardingButton
          icon={personIcon}
          active={active}
          size="small"
          onClick={() => {setActive("tech"); dispatch(updateField({ field:"experience", value: "beginner" }))}}
          name="tech"
          title="I’m a Beginner"
          desc="Create a portfolio to discover open source projects."
        />
        <OnboardingButton
          icon={maintainerIcon}
          active={active}
          size="small"
          onClick={() => {setActive("non-tech"); dispatch(updateField({ field:"experience", value: "Intermediate" }))}}
          name="non-tech"
          title="I’m an Intermediate"
          desc="Create and maintain open source ethereum projects."
        />
        <OnboardingButton
          icon={maintainerIcon}
          active={active}
          size="small"
          onClick={() => {setActive("non-teche"); dispatch(updateField({ field:"experience", value: "expert" }))}}
          name="non-teche"
          title="I’m an Expert"
          desc="Create and maintain open source ethereum projects."
        />
      </div>
      <div className={formStyles.btnGroup}>
        <Button
          onClick={() => dispatch(prevStep())}
          variant={"outline"}
          className="w-full p-6 bg-white rounded-full font-normal text-base"
        >
          Back
        </Button>
        <Button
          onClick={() => {dispatch(nextStep());  navigate("/dashboard")}}
          variant={"secondary"}
          className="w-full p-6 rounded-full font-normal text-base"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};
