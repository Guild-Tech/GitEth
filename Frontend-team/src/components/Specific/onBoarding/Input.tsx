// import React from 'react'
import GloomyTags from "react-tag-maker";
import React, { useState } from "react";

// type Country = {
//   name: string;
//   code: string;
//   dialCode: string;
// };



// export const PhoneNumberInput = (props: any) => {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);

//   const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const country = countries.find((c) => c.code === event.target.value);
//     if (country) setSelectedCountry(country);
//   };

//   return (
//     <div className="w-full flex  justify-between flex-col">
//       <p className="text-sm text-[#101323] ">{props.title}</p>
//       <div className="border border-border rounded-2xl  w-full flex py-2">
//         {/* Country Code Dropdown */}
//         <select
//           value={selectedCountry.code}
//           onChange={handleCountryChange}
//           // name={props.name}
//           className="bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-[30%]"
//         >
//           {countries.map((country) => (
//             <option key={country.code} value={country.code}>
//               {country.dialCode} ({country.name})
//             </option>
//           ))}
//         </select>

//         {/* Phone Number Input */}
//         <input
//           type="number"
//           name={props.name}
//           value={props.value}
//           onChange={props.onChange}
//           placeholder="Enter phone number"
//           className="bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none  w-[70%]"
//         />
//       </div>
//     </div>
//   );
// };


export const PhoneNumberInput = (props: any) => {
  const [selectedCode, setSelectedCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [toggle, setToggle] = useState(false);
 

  const handleCodeSelect = (code:any) => {
    setSelectedCode(code);
    updateFullPhoneNumber(code, phoneNumber);
  };

  const handlePhoneNumberChange = (e:any) => {
    const number = e.target.value;
    setPhoneNumber(number);
    updateFullPhoneNumber(selectedCode, number);
  };

  const updateFullPhoneNumber = (code:any, number:any) => {
    // props.setFullPhoneNumber(`${code}${number}`);
    props.onChange({ target: { name: props.name, value: `${code}${number}` } });
  };

  return (
    <div className="w-full flex  justify-between flex-col">
      <p className="text-sm text-[#101323] ">{props.title}</p>
      <div className="items-center border border-border rounded-2xl  w-full flex py-2">
        {/* Dropdown Button */}
        <div className="relative">
          <button
          onClick={() => setToggle(!toggle)}
            id="dropdown-phone-button"
            type="button"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center "
          >
            {selectedCode}
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
      
          {toggle&&<div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 text-gray-800">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <button
                  type="button"
                  onClick={() => handleCodeSelect("+1")}
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  United States (+1)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCodeSelect("+44")}
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  United Kingdom (+44)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCodeSelect("+91")}
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  India (+91)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleCodeSelect("+234")}
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Nigeria (+234)
                </button>
              </li>
            </ul>
          </div>}
        </div>

        {/* Phone Number Input */}
        <input
          type="text"
          className="bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none  w-[70%]"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
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
          className="bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full text-gray-700"
        />
      </div>
    </div>
  );
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
          classNames={{
            tag: "px-4 py-2 bg-white text-center rounded-full bg-black text-[#101323]",
            input:
              "bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full bg-black",
          }}
        />
      </div>
    </div>
  );
}


interface DropdownFieldsProps {
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  options: string[];
  title: string;
}

export const DropdownFields: React.FC<DropdownFieldsProps> = ({
  selectedOptions,
  setSelectedOptions,
  options,
  title,
}) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && !selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
  };

  return (
    <div>
      <h3 className="mb-2 font-medium text-gray-700">{title}</h3>
      <div className="flex items-center bg-white border border-gray-300 rounded-3xl p-3 ">

      <div className="flex gap-2 flex-wrap  w-full items-center">
        {selectedOptions.map((option) => (
          <span
            key={option}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full cursor-pointer"
            onClick={() => handleRemoveOption(option)}
          >
            {option} &times;
          </span>
        ))}
      </div>

      <select
        className="w-12 p-2 border-none rounded-md  bg-transparent focus:outline-none focus:ring-0 focus-visible:outline-none appearance-none cursor-pointer"
        onChange={handleSelect}
        defaultValue=""
      >
        <option value="" disabled>
          {/* {title.toLowerCase()} */}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>


      </div>

    </div>
  );
};



// export const SelectFields: React.FC<DropdownFieldsProps> = ({
//   // selectedOptions,
//   setSelectedOptions,
//   // options,
//   title,
// }) => {
//   const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
  
//       setSelectedOptions([ value]);

//   };

//   return (
//     <div className="w-full flex flex-col justify-between">
//     <p className="text-sm text-[#101323] mb-1">{title}</p>
//     <div className="border border-border rounded-2xl p-2 w-full">
//       {/* <label>Type:</label> */}
//       <select
//         // value={projectInfo.type}
//         className='bg-transparent border-none focus:outline-none focus:ring-0 focus-visible:outline-none w-full text-gray-700'
//         onChange={(e) => handleSelect(e)}
//       >
//         <option value="">Select</option>
//         <option value="Volunteer">Volunteer</option>
//         <option value="Funded">Funded</option>
//       </select>
//     </div>
//     </div>
//   );
// };
