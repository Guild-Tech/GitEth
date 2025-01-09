// import React from 'react';
import { Plus, X } from 'lucide-react';

interface LinkInputProps {
  links: string[];
  newLink: string;
  onNewLinkChange: (value: string) => void;
  onAddLink: () => void;
  onRemoveLink: (link: string) => void;
}

export function LinkInput({ links, newLink, onNewLinkChange, onAddLink, onRemoveLink }: LinkInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
      <input
  type="text"
  value={newLink}
  onChange={(e) => onNewLinkChange(e.target.value)}
  placeholder="Add links to your socials or website"
  className="flex-1 p-3 rounded-lg border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
/>

        <button
          type="button"
          onClick={onAddLink}
          className="p-3 rounded-full border border-gray-200 hover:bg-gray-50"
        >
          <Plus className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      {links.map((link, index) => (
        <div key={index} className="flex items-center text-gray-900 justify-between p-2 bg-gray-50 rounded-full">
          <span className="text-sm">{link}</span>
          <button
            type="button"
            onClick={() => onRemoveLink(link)}
            className="p-1 hover:bg-gray-200 rounded-full"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      ))}
    </div>
  );
}