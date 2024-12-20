import { Button } from "@/components/ui/button";
import  { useRef, useState } from "react";
import formStyles from "./contributorForm/formStyles";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "@/store/reducers/onboardingIndex";
import { RootState } from "@/store";
import { useNavigate } from "react-router-dom";



/**
 * TermsAndConditions component.
 *
 * This component renders the terms and conditions page of the onboarding process.
 * It includes a scrollable div containing the terms and conditions text.
 * The "Continue" button is disabled until the user scrolls to the end of the terms.
 * 
 * The component uses Redux to dispatch actions and access user authentication state.
 * It also tracks whether the terms have been scrolled to the end using local state.
 *
 * @returns {JSX.Element} The component JSX
 */
const TermsAndConditions = () => {
  const termsRef = useRef<HTMLDivElement>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  // const [isAgreement, setIsAgreement] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked, isScrolledToEnd)
  const dispatch = useDispatch();
  // const {user} = useSelector((state: RootState) => state.auth);
  const onboardingInfo = useSelector((state: RootState) => state.onboarding);
  const navigate = useNavigate();
  const handleScroll = () => {
    const element = termsRef.current;
    if (element) {
      // Check if user has scrolled to the bottom
      const isAtEnd = element.scrollHeight - element.scrollTop === element.clientHeight;
      setIsScrolledToEnd(isAtEnd);
    }
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked); // Update state based on checkbox ticked
  };

  return (
    <div className={formStyles.container}>
      <h1 className="text-4xl font-medium font-kern mb-4">Terms and Conditions</h1>
      <div
        ref={termsRef}
        onScroll={handleScroll}
        className="h-[50vh] overflow-y-auto  rounded scrollbar-none relative" 
      >
        <div className="mb-4">
          <h2 className="text-2xl font-medium font-kern">
            1. Introduction
          </h2>
          <p className="text-[17px] font-normal">Welcome to Eth Open Source! These Terms and Conditions ("Terms") govern your access to and use of our platform, including all related services, tools, and features. By using the platform, you agree to comply with these Terms. If you do not agree, you may not use the platform.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-medium font-kern my-2">
            2. Definitions
          </h2>
          <ol className="list-disc pl-8 list-outside">
            <li className="">Platform: Refers to Eth Open Source, including its website, dashboard, and any associated applications.</li>
            <li className="">User: Any individual who accesses or uses the platform, including maintainers and contributors.</li>
            <li className="">Maintainer: A user who owns or manages projects on the platform.</li> 
            <li className="li">Contributor: A user who applies for or works on tasks within projects.</li> 
            <li className="li">Content: Includes all text, images, code, and data uploaded or submitted by users.</li>
          </ol>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-medium font-kern my-2">
            3. Definitions
          </h2>
          <ol className="list-disc pl-8 list-outside">
            <li className="">Platform: Refers to Eth Open Source, including its website, dashboard, and any associated applications.</li>
            <li className="">User: Any individual who accesses or uses the platform, including maintainers and contributors.</li>
            <li className="">Maintainer: A user who owns or manages projects on the platform.</li> 
            <li className="li">Contributor: A user who applies for or works on tasks within projects.</li> 
            <li className="li">Content: Includes all text, images, code, and data uploaded or submitted by users.</li>
          </ol>
        </div>

      {!isScrolledToEnd && <div className="h-[30vh] w-full fixed bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white bg-opacity-50"></div>}

        {/* Repeat more content to make it scrollable */}
      </div>
      <div className="">

      <input className=" mr-3 text-purple-700 border-none " type="checkbox" name="check" id="check" onChange={handleCheckboxChange} /> <label htmlFor="check"> Agreed to terms and conditions</label>
      </div>

      <Button
        onClick={() => { onboardingInfo.role  === "maintainer" ? navigate("/dashboard") : dispatch(nextStep()); }}
        variant={"secondary"}
        disabled={!isChecked}
        className="w-full p-6 rounded-full font-normal text-base mt-4"
      >
        Continue
      </Button>
    </div>
  );
};

export default TermsAndConditions;
