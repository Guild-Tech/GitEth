import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  maxSize?: string;
  visual?: File | null;
}

export function FileUpload({ onUpload, accept = "image/*", maxSize = "800×400px", visual}: FileUploadProps) {
  return (
    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8">
      <input
        type="file"
        accept={accept}
        onChange={onUpload}
        className="hidden"
        id="visual-upload"
      />
      {visual ? <img src={URL.createObjectURL(visual)} alt="Uploaded Visual" className='' /> : <label htmlFor="visual-upload" className="cursor-pointer">
        <div className="flex flex-col items-center text-center">
          <Upload className="w-6 h-6 text-gray-400 mb-2" />
          <p className="text-sm">
            <span className="text-purple-600">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. {maxSize})</p>
        </div>
      </label>}
    </div>
  );
}