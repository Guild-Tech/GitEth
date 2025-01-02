import { useEffect, useState } from "react";
// import { OnboardingButton } from "../..";
// import { Button } from "@/components/ui/button";
import personIcon from "../../../assets/icons/person.svg";
import maintainerIcon from "../../../assets/icons/maintainer.svg";
import { OnboardingButton } from "./OnboardingCTAButton";
import { RootState, useAppDispatch } from "@/store";
import {  useSelector } from "react-redux";
import { loginWithGitHub, loginWithGoogle } from "@/store/actions/auth";
// import { FirstScreenProps } from "../types";
import formStyles from "./contributorForm/formStyles";
import { nextStep } from "@/store/reducers/onboardingIndex";
import { setUserData } from "@/store/reducers/onboarding";
import { setRole } from "@/store/actions/onboardState";
import { handleGitHubCallback, redirectToGitHubAuth } from "@/services/api";
// import { setOnboardUser } from "@/store/actions/Onboarding";

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

export const FirstScreen = () => {
  // const dispatch = useDispatch();
  const [active, setActive] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  // const currentIndex = useSelector((state: RootState) => state.onboardingIndex.currentIndex);
  const {user} = useSelector((state: RootState) => state.auth);
  const [userx, setUser] = useState<{ id: string; name: string; email: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      // Check if the `code` parameter exists in the URL
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (code) {
          // Exchange the code for a token and user details
          handleGitHubCallback(code)
              .then((response) => {
                  setUser(response.user);
                  localStorage.setItem("token", response.token); // Store the token
                  window.history.replaceState({}, document.title, "/"); // Clean the URL
              })
              .catch((err) => {
                  console.error("Authentication error:", err);
                  setError("Failed to authenticate with GitHub.");
              });
      }
  }, []);
  // console.log(user)
  useEffect(() => {
    if (user) {
      dispatch(nextStep());
    }
  }, [user]);

  const { loginType:logintype } = useSelector((state: RootState) => state.onboardState);
     
  function handleLoginx(role:string){
    if(logintype === "github"){
      setActive(role); 
      dispatch(setUserData({role}))
      dispatch(setRole(role))
      dispatch(loginWithGitHub()); 

    } else if(logintype === "google"){
      setActive(role); 
      dispatch(setUserData({role}))
      dispatch(setRole(role))
      dispatch(loginWithGoogle())
    }
  }

  const handleLogin = (role:string) => {
    console.log(role)
    redirectToGitHubAuth(); // Redirect to the backend to start GitHub OAuth
};
  
  return (
    <div className={formStyles.container}>
      <div className={formStyles.headWrapper}>
        <h1 className={formStyles.title}>Set up your profile</h1>
        <p className={formStyles.desc}>
          To get started, help us understand your main reason for joining Eth
          Open Source
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <OnboardingButton
          icon={personIcon}
          active={active}
          size="big"
          onClick={() => {setActive("contributor"); handleLogin("contributor")}}
          name="contributor"
          title="Sign up as a Contributor"
          desc="Create a portfolio to discover open source projects, join amazing ethereum ecosystems and help them grow."
        />
        <OnboardingButton
          icon={maintainerIcon}
          active={active}
          size="big"
          onClick={() => {setActive("maintainer"); handleLogin("maintainer")}}
          name="maintainer"
          title="Sign up as a Maintainer"
          desc="Create and maintain open source ethereum projects and find qualified contributors to join your team."
        />
      </div>
      <div>
        {/* <Button
          onClick={() => setFirstIndex(firstIndex + 1)}
          variant={"secondary"}
          disabled={user === null}
          className="w-full p-6 rounded-full font-normal text-base"
        >
          Next
        </Button> */}
      </div>
    </div>
  );
};
