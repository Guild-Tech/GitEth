import { useState } from "react";
import  { TagFields } from "../Input";
import { Button } from "@/components/ui/button";
import formStyles from "./formStyles";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "@/store/reducers/onboardingIndex";




/**
 * FourthScreen component.
 *
 * This component renders the fourth screen of the onboarding flow.
 * It renders a brief overview, two TagFields components for the user's skills and goals,
 * and two call-to-action buttons.
 *
 * The component is responsive and scales according to the screen size.
 *
 * @returns {JSX.Element} The component JSX
 */
export const FourthScreen = () => {
  const [skill, setSkill] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const dispatch = useDispatch();


  return (
    <div className={formStyles.container}>
      <div className={formStyles.headWrapper}> 
          <h1 className={formStyles.title}>Complete Your Profile 3/4</h1>
        <div className={formStyles.descWrapper}>
          <p className={formStyles.desc}>
            Provide additional information to help maintainers better match you
            with suitable projects.
          </p>
          <button className={formStyles.skip} onClick={() => dispatch(nextStep())}>Skip</button>
        </div>
     
      </div>

      <TagFields
        skill={skill}
        setSkill={setSkill} 
        title="Skills"
      />
      <TagFields
        skill={goals}
        setSkill={setGoals} 
        title="Goals"
        
      />
      <div className={formStyles.btnGroup}>
        <Button
          onClick={() => dispatch(prevStep())}
          variant={"outline"}
          className="w-full p-6 bg-white rounded-full font-normal text-base"
        >
          Back
        </Button>
        <Button
          onClick={() => dispatch(nextStep())}
          variant={"secondary"}
          className="w-full p-6 rounded-full font-normal text-base"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
