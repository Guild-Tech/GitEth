// import { useState } from "react";
import Input, { PhoneNumberInput } from "../Input";
import TextArea from "../TextArea";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import formStyles from "./formStyles";
import { nextStep, prevStep } from "@/store/reducers/onboardingIndex";
import { updateField } from "@/store/reducers/onboarding";
import { useState } from "react";

/**
 * ThirdScreen component.
 *
 * This component renders the third screen of the onboarding flow.
 * It allows the user to provide their first name, last name, phone number,
 * biography, and website. The component uses the user's existing data from
 * the Redux store to pre-fill some input fields.
 *
 * @returns {JSX.Element} The component JSX.
 */
export const ThirdScreen = () => {
  // const { user } = useSelector((state: RootState) => state.auth);
  const [isFormComplete, setIsFormComplete] = useState(false);
  // const navigate = useNavigate();
  const dispatch = useDispatch();




  const onboarding = useSelector((state: RootState) => state.onboarding);

  // Handle input changes
  const handleInputChange = (field: any, value: string) => {
    dispatch(updateField({ field, value }))
    setIsFormComplete(
      onboarding.firstname.length > 0 && onboarding.lastname.length > 0 && onboarding.phone.length > 0 && onboarding.bio.length > 0 && onboarding.website.length > 0);
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [field]: value,
    // }));
  };

  /**
   * Handle the "Next" button click.
   * Dispatches the formData to Redux and navigates to the next step.
   */
  const handleNext = () => {
    // Perform validation or dispatch formData to Redux if needed
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
        </div>
      </div>

      {/* Input fields for first name and last name */}
      <div className="flex gap-4 max-sm:flex-col max-sm:gap-7">
        <Input
          title="First Name"
          placeholder="Enter your first name"
          value={onboarding.firstname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("firstname", e.target.value)
          }
        />
        <Input
          title="Last Name"
          placeholder="Enter your last name"
          value={onboarding.lastname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("lastname", e.target.value)
          }
        />
      </div>

      {/* Input fields for location and phone number */}
      <div className="flex gap-4 max-sm:flex-col max-sm:gap-7">
        <Input
          title="Location"
          placeholder="Enter your location"
          value={onboarding.location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("location", e.target.value)
          }
        />
        <PhoneNumberInput
          title="Mobile Number"
          placeholder="Enter your phone number"
          value={onboarding.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("phone", e.target.value)
          }
        />
      </div>

      {/* Input field for biography */}
      <TextArea
        title="Biography"
        placeholder="Tell us about yourself"
        value={onboarding.bio}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleInputChange("bio", e.target.value)
        }
      />

      {/* Input field for website */}
      <Input
        title="Website"
        placeholder="Add a link to your website"
        value={onboarding.website}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange("website", e.target.value)
        }
      />

      {/* Button group for navigation */}
      <div className={formStyles.btnGroup}>
        <Button
          onClick={() => dispatch(prevStep())}
          variant="outline"
          className="w-full p-6 bg-white rounded-full font-normal text-base"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          variant="secondary"
          disabled={!isFormComplete}
          className={`w-full p-6 rounded-full font-normal text-base `}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
