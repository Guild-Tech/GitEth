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

const PhoneNumberInput: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.code === event.target.value);
    if (country) setSelectedCountry(country);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (

      <div className="flex items-center">
        {/* Country Code Dropdown */}
        <select
          value={selectedCountry.code}
          onChange={handleCountryChange}
          className="border border-gray-300 rounded-l px-3 py-2 bg-gray-50 text-gray-700 w-16"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.dialCode} ({country.name})
            </option>
          ))}
        </select>

        {/* Phone Number Input */}
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter phone number"
          className="flex-1 border border-gray-300 rounded-r px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  );
};

export default PhoneNumberInput;
