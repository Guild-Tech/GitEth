// import React from 'react'
import GloomyTags from 'react-tag-maker'
import React, { useState } from "react";

type Country = {
  name: string;
  code: string;
  dialCode: string;
};

const countries: Country[] = [
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "Canada", code: "CA", dialCode: "+1" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
  { name: "India", code: "IN", dialCode: "+91" },
  { name: "Nigeria", code: "NG", dialCode: "+234" },
  { name: "Australia", code: "AU", dialCode: "+61" },
  // Add more countries as needed
];

export const PhoneNumberInput = (props:any) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.code === event.target.value);
    if (country) setSelectedCountry(country);
  };


  return (
    <div className="w-full flex  justify-between flex-col">
      <p className="text-sm text-[#101323] ">{props.title}</p>
      <div className="border border-border rounded-2xl  w-full flex py-2">
        {/* Country Code Dropdown */}
        <select
          value={selectedCountry.code}
          onChange={handleCountryChange}
          // name={props.name}
          className="bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-[30%]"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code} >
              {country.dialCode} ({country.name})
            </option>
          ))}
        </select>

        {/* Phone Number Input */}
        <input
          type="tel"
          name={props.name}

          value={props.value}
          onChange={props.onChange}

          placeholder="Enter phone number"
          className="bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none  w-[70%]"
        />
      </div>
      </div>
  );
};


export default function Input(props: any) {
  return (
    <div className="w-full flex flex-col justify-between">
    <p className="text-sm text-[#101323] mb-1">{props.title}</p>
    <div className="border border-border rounded-2xl p-2 w-full">
      <input
      name={props.name}
        onChange={props.onChange}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        className="bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full"
      />
    </div>
  </div>
  )
}


export function TagFields(props: any) {
  return (
  <div className="w-full flex flex-col justify-between">
    <p className="text-sm text-[#101323] mb-1">{props.title}</p>
    <div className="border border-border rounded-2xl p-2 w-full ">

      <GloomyTags
        state={props.skill}
        setState={props.setSkill} 
        name={props.name}
        classNames={{ tag: 'px-4 py-2 bg-white text-center rounded-full bg-black text-[#101323]', input: "bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full bg-black" }}
        
      />
    </div>
  </div>
  )
}
