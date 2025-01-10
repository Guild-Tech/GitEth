// import React from 'react';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { ProjectFormData } from '../types/project';


interface SelectFieldProps {
  name: keyof ProjectFormData | any;
  control: Control<ProjectFormData>;
  options: string[];
  placeholder?: string;
}

export function SelectField({ name, control, options, placeholder }: SelectFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          {...field}
          className="w-full p-3 rounded-2xl border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}
    />
  );
}