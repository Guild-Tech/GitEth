import { useState } from "react";
import { DropdownFields } from "../Input";
import { Button } from "@/components/ui/button";
import formStyles from "./formStyles";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "@/store/reducers/onboardingIndex";
import { updateField } from "@/store/reducers/onboarding";

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
  const [skills, setSkills] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const dispatch = useDispatch();

  // Predefined options for skills and goals
  const skillOptions = [
    "React.js",
    "Node.js",
    "TypeScript",
    "Solidity",
    "UI/UX Design",
    "Python",
    "Data Analysis",
    "Blockchain Development",
  ];

  const goalOptions = [
    "Build scalable applications",
    "Contribute to open-source",
    "Improve coding skills",
    "Learn new technologies",
    "Collaborate on projects",
    "Develop leadership skills",
  ];

  const handleNext = () => {
    dispatch(updateField({ field:"skills", value: skills }))
    dispatch(updateField({ field:"goal", value: goals }))
    dispatch(nextStep())
  }



  return (
    <div className={formStyles.container}>
      <div className={formStyles.headWrapper}>
        <h1 className={formStyles.title}>Complete Your Profile 3/4</h1>
        <div className={formStyles.descWrapper}>
          <p className={formStyles.desc}>
            Provide additional information to help maintainers better match you
            with suitable projects.
          </p>
        </div>
      </div>


            {/* Dropdown for Skills */}
            <DropdownFields
        selectedOptions={skills}
        setSelectedOptions={setSkills}
        options={skillOptions}
        title="Skills"
      />

      {/* Dropdown for Goals */}
      <DropdownFields
        selectedOptions={goals}
        setSelectedOptions={setGoals}
        options={goalOptions}
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
          onClick={handleNext}
          variant={"secondary"}
          className="w-full p-6 rounded-full font-normal text-base"
          disabled={skills.length === 0 || goals.length === 0} // Disable if no selections
        >
          Next
        </Button>
      </div>
    </div>
  );
};
