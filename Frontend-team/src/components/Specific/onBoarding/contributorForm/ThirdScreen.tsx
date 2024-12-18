import { useState } from "react";
import Input, { PhoneNumberInput } from "../Input";
import TextArea from "../TextArea";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import formStyles from "./formStyles";
import { nextStep, prevStep } from "@/store/reducers/onboardingIndex";


/**
 * ThirdScreen component.
 *
 * This component renders the third screen of the onboarding flow.
 * It allows the user to provide their first name, last name, phone number,
 * biography, and website. The component uses the user's existing data from
 * the Redux store to pre-fill some input fields.
 *
 * The component is responsive and adapts to different screen sizes.
 *
 * @returns {JSX.Element} The component JSX
 */
export const ThirdScreen = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  // Local state for inputs
  const [formData, setFormData] = useState({
    firstName: user?.displayName?.split(" ")[0] || "",
    lastName: user?.displayName?.split(" ")[1] || "",
    phoneNumber: "",
    location: "",
    biography: "",
    website: "",
  });
  console.log(formData)

  // Handle input changes
  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  /**
   * Handle the "Next" button click.
   * Dispatches the formData to Redux and navigates to the next page.
   */
  const handleNext = () => {
    // You can dispatch the formData to Redux if needed or validate it here
    dispatch(nextStep());
  };

  return (
    <div className={formStyles.container}>
      <div className={formStyles.headWrapper}>
        <h1 className={formStyles.title}>Complete Your Profile 1/4</h1>
        <div className={formStyles.descWrapper}>
          <p className={formStyles.desc}>
            Provide additional information to help maintainers better match you
            with suitable projects.
          </p>
          <button className={formStyles.skip} onClick={() => navigate("/dashboard")}>Skip</button>
        </div>

      </div>
      <div className="flex gap-4 max-sm:flex-col max-sm:gap-7">
        <Input
          title="First Name" placeholder="Enter your first name" value={user?.displayName?.split(" ")[0]}
          onChange={(e: any) => handleInputChange("firstName", e.target.value)}

        />
        <Input title="Last Name" placeholder="Enter your last name" value={user?.displayName?.split(" ")[1]}
          onChange={(e: any) => handleInputChange("lastName", e.target.value)}
        />
      </div>

      <div className="flex gap-4 max-sm:flex-col max-sm:gap-7">
        <Input title="Location" placeholder="Enter your loaction " value={""}
          onChange={(e: any) => handleInputChange("location", e.target.value)}
        />
        <PhoneNumberInput title="Mobile Number" placeholder="Enter your phone number"
          onChange={(e: any) => handleInputChange("phoneNumber", e.target.value)}
        />
      </div>

      <TextArea title="Biography" placeholder="Tell us about yourself"
        onChange={(e: any) => handleInputChange("biography", e.target.value)}
      />
      <Input title="Website" placeholder="Add a link to your website"
        onChange={(e: any) => handleInputChange("website", e.target.value)}
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
          // onClick={() => {dispatch(nextStep()); dispatch(setOnboardUser({
          //   ...onboardingInfo,
          //   firstName: formData.firstName,
          //   lastName: formData.lastName,
          //   email: user?.email as string,
          //   photoURL: user?.photoURL as string,
          //   location: formData.location,
          //   website: formData.website,
          // })}}
          variant={"secondary"}
          className="w-full p-6 rounded-full font-normal text-base"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
