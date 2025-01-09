import { useState } from "react";
import { Modal } from "./Modal";
import { OrganizationStep } from "./OrganizationStep";
import { ProjectDetailsStep } from "./ProjectDetailsStep";
import { RepositoryStep } from "./RepositoryStep";
import { Button } from "@/components/ui/button";
// import useProjects from "@/hooks/useProjects";


const MOCK_ORGS = [
  {
    id: '1',
    name: 'Noyi24_7',
    avatar: 'https://github.com/noyi.png',
  },
];

const MOCK_REPOS = [
  {
    id: '1',
    name: 'Repo',
    description: 'This repo has no description.',
  },
];
interface Organization {
  id: string;
  name: string;
  avatar: string;
}

function CreateProject() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  // const [selectedOrgs, _] = useState<string[]>([]);
  const [selectedRepos, setSelectedRepos] = useState<string[]>([]);
  const [InstalledOrganiztion, setInstalledOrganiztion] = useState<Organization[]>([]);
  // const {createProject} = useProjects()
  const [availableOrgs, setAvailableOrgs] = useState<Organization[]>(MOCK_ORGS);
  // const [installedOrgs, setInstalledOrgs] = useState<Organization[]>([]);
  const handleInstall = async (orgId: string) => {
    const org = availableOrgs.find((item) => item.id === orgId)!;
    setAvailableOrgs((prev) => prev.filter((item) => item.id !== org.id));
    setInstalledOrganiztion((prev) => [...prev, org]);
  }



  // const handleSelectOrg = (orgId: string) => {
  //   // setSelectedOrgs((prev:any) => [...prev, orgId]);
  //   setInstalledOrganiztion((prev:any) => [...prev, orgId]);
  //   // setStep(2);
  // };
  const handleNext = () => {
    setStep(step + 1);  
  };

  const handleSelectRepo = (repoId: string) => {
    setSelectedRepos((prev:any) => [...prev, repoId]);
    setStep(3);
  };

  // const handleSubmit = async(data: any) => {
  //   console.log('Form submitted:', data);
    
  //   // const x = await createProject(data)
  //   // console.log(x)
  //   // setIsOpen(false);
  //   // setStep(1);
    
  // };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <OrganizationStep
            availableOrgs={availableOrgs}
            installedOrgs={InstalledOrganiztion}
            handleNext={handleNext}
            handleInstall={handleInstall}
            // onSelectOrg={handleSelectOrg}
            // selectedOrgs={selectedOrgs}
          />
        );
      case 2:
        return (
          <RepositoryStep
            repositories={MOCK_REPOS}
            onSelectRepo={handleSelectRepo}
            selectedRepos={selectedRepos}
          />
        );
      case 3:
        return <ProjectDetailsStep
        //  onSubmit={handleSubmit}
        setIsOpen={setIsOpen}
          />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <Button variant={"default"} className="rounded-full" onClick={() => setIsOpen(true)}>Create New Project</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        step={step}
        totalSteps={3}
      >
        {renderStep()}
      </Modal>
    </div>
  );
}

export default CreateProject;