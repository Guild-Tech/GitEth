// import React from 'react';
import { Plus, X } from 'lucide-react';

interface SkillsInputProps {
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
}

export function SkillsInput({ skills, onAddSkill, onRemoveSkill }: SkillsInputProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg text-black">
          <span>{skill}</span>
          <button
            type="button"
            onClick={() => onRemoveSkill(skill)}
            className="p-1 hover:bg-gray-200 rounded-full"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onAddSkill('New Skill')}
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
      >
        <Plus className="w-5 h-5 text-purple-600" />
      </button>
    </div>
  );
}