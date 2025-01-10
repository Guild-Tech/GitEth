// import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

interface Organization {
  id: string;
  name: string;
  avatar: string;
}

interface OrganizationStepProps {
  availableOrgs: Organization[];
  installedOrgs: Organization[];
  // onSelectOrg: (orgId: string) => void;
  handleNext: () => void;
  handleInstall: (orgId: string) => void;
  // selectedOrgs: string[];
}

export function OrganizationStep({
  availableOrgs,
  installedOrgs,
  // onSelectOrg,
  handleNext,
  handleInstall,
  // selectedOrgs,
}: OrganizationStepProps) {

  return (
    <div>
      
        {/* Title */}
             <div className="mb-5">
          <p className="text-[28px] font-kern text-black">
            Choose Github Organisations
          </p>
          <p className="text-[16px] text-black">
            Create an organisation on github containing the repositories you
            want to add
          </p>
        </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg text-gray-800 font-medium mb-4">Available Organisations</h3>
          {availableOrgs.length > 0 ? (
            <div className="space-y-3">
              {availableOrgs.map((org) => (
                <button
                  key={org.id}
                  onClick={() => handleInstall(org.id)}
                  className="w-[576px] h-[104px] border-border border rounded-[24px] p-5"
                >
                   <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <img src={org.avatar} alt={org.name}  className="w-[40px] h-[40px] rounded-full"/>
                    <p className="text-black text-[22px]">{org.name}</p>
                  </div>
                  {/* <div
                    className="w-[20px] h-[20px] border rounded-full cursor-pointer flex items-center justify-center"
                    onClick={() => handleInstall(org)}
                  >
                    <img src={fram} alt="Add" />
                  </div> */}
                  <Plus className="w-5 h-5 text-gray-400" />
                </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-gray-700 p-4 rounded-lg border border-gray-200  bg-white">
              You have no organization available.
            </div>
          )}
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4 text-gray-800">
            Installed on these Organisations
          </h3>
          {installedOrgs.length > 0 ? (
            <div className="space-y-3">
              {installedOrgs.map((org) => (
                 <button
                 key={org.id}
                 onClick={() => handleNext()}
                 className="w-[576px] h-[104px] border-border border rounded-[24px] p-5"
               >
                  <div className="flex justify-between items-center">
                 <div className="flex gap-2 items-center">
                   <img src={org.avatar} alt={org.name}  className="w-[40px] h-[40px] rounded-full"/>
                   <p className="text-black text-[22px]">{org.name}</p>
                 </div>
                 {/* <div
                   className="w-[20px] h-[20px] border rounded-full cursor-pointer flex items-center justify-center"
                   onClick={() => handleInstall(org)}
                 >
                   <img src={fram} alt="Add" />
                 </div> */}
               <Check className="w-5 h-5 text-gray-600" />
               </div>
               </button>
              ))}
            </div>
          ) : (
            <div className="text-gray-700 p-4 rounded-lg border border-gray-200 bg-white">
              You have no organization available.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}