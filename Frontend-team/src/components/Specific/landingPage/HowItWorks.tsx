import featureIcon from "../../../assets/icons/feature.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import diamond from "../../../assets/icons/diamond.png";
// import logo from "../../../assets/icons/EthOpenSource.svg";
import CustomText from "./CustomText";
// import { useNavigate } from "react-router-dom";
import { CarouselCard } from "./CarouselCard";
import step1 from "../../../assets/images/step1.png";
import step2 from "../../../assets/images/step2.png";
import step3 from "../../../assets/images/step3.png"



/**
 * HowItWorks component.
 *
 * This component renders a section on the landing page that explains how the platform works.
 * It includes a brief overview of the platform, a sign up form, and a call to action button.
 *
 * The component is responsive and scales according to the screen size.
 *
 * @returns {JSX.Element} The component JSX
 */
export default function HowItWorks() {
  // const navigate = useNavigate();
  // const h = () => {
  //   console.log("object")
  // }
  return (
    <section className="mx-auto max-w-7xl px-4 max-sm:px-7">
      <img src={featureIcon} alt="" className="mx-auto max-sm:w-36" />

      <div className="py-2">
        <div className="flex justify-center items-center sm:mt-3 ">
          <CustomText text="How It Works" style="text-center text-5xl max-sm:text-2xl leading-8 font-bold mx-auto max-sm:text-3xl" />
        </div>
        <div className="flex justify-center my-12">
          <Tabs defaultValue="account" className="h-full mx-auto relative w-full flex flex-col items-center justify-center" activationMode="automatic">
            <TabsList className="rounded-full border-border border h-full max-sm:h-14 p-2 text-xl bg-transparent w-fit max-sm:w-72 " >
              <TabsTrigger defaultChecked value="account" className="py-3 px-6 rounded-3xl text-xl max-sm:text-lg max-sm:font-normal max-sm:px-6 max-sm:py-3 max-sm:w-full">Step 1</TabsTrigger>
              <TabsTrigger value="step2" className="py-3 px-6 rounded-3xl text-xl max-sm:text-lg max-sm:font-normal max-sm:px-6 max-sm:py-3 max-sm:w-full">Step 2</TabsTrigger>
              <TabsTrigger value="step3" className="py-3 px-6 rounded-3xl text-xl max-sm:text-lg max-sm:font-normal max-sm:px-6 max-sm:py-3max-sm:w-full max-sm:w-full">Step 3</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="w-full ">
              <CarouselCard id={1} image={step1} title="Sign Up and Create Your Profile" description="Join the platform, create your profile, and highlight your skills." />
            </TabsContent>
            <TabsContent value="step2" className="w-full">
              <CarouselCard id={2} image={step2} title="Explore Projects and Apply for Tasks" description="Browse open-source projects, find tasks that match your skills, and apply to contribute." />
            </TabsContent>
            <TabsContent value="step3" className="w-full">
              <CarouselCard id={3} image={step3} title="Contribute, Track, and Get Rewarded" description="Complete tasks, submit your work, and get rewarded directly through the platform." />
            </TabsContent>
            <div className="absolute top-20  right-[50%] -z-10">
              <img src={diamond} alt="" className=" w-56 blur-sm animate-pulse" />
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}