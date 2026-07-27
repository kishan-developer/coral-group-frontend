'use client';

import React, { useState } from 'react';
import { GripVertical, Trash2, ChevronUp, ChevronDown, Image as ImageIcon, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface ImageBlockProps {
  id: string;
  url: string;
  alt: string;
  onUpdate: (id: string, data: { url: string; alt: string }) => void;
  onDelete: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
  onUpload: (file: File) => Promise<string>;
}

export default function ImageBlock({
  id,
  url,
  alt,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
  onUpload,
}: ImageBlockProps) {
  const [uploadMode, setUploadMode] = useState<'url' | 'upload'>('url');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(url || null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      setUploading(true);
      try {
        console.log('Starting image upload for block:', id);
        console.log('File details:', { name: file.name, size: file.size, type: file.type });
        
        const uploadedUrl = await onUpload(file);
        
        console.log('Upload successful, URL:', uploadedUrl);
        
        if (!uploadedUrl) {
          throw new Error('Upload returned empty URL');
        }
        
        onUpdate(id, { url: uploadedUrl, alt });
        setFile(null);
        setPreview(uploadedUrl);
        
        console.log('Image block updated successfully');
        toast.success('Image uploaded successfully');
      } catch (error) {
        console.error('Upload failed:', error);
        toast.error('Image upload failed. Please try again.');
      } finally {
        setUploading(false);
      }
    }
  };

  const handleUrlChange = (newUrl: string) => {
    setPreview(newUrl);
    onUpdate(id, { url: newUrl, alt });
  };

  const handleAltChange = (newAlt: string) => {
    onUpdate(id, { url, alt: newAlt });
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-white/10 p-4 group hover:border-[#94cb3d]/30 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <GripVertical className="w-5 h-5 text-gray-500 cursor-move" />
          <span className="text-sm font-medium text-gray-400">Image Block</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onMoveUp(id)}
            disabled={isFirst}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Move Up"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => onMoveDown(id)}
            disabled={isLast}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Move Down"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-white/10 rounded transition-colors"
            title="Delete Block"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Upload/URL Toggle */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setUploadMode('url');
              setFile(null);
            }}
            className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors ${
              uploadMode === 'url' ? 'bg-[#94cb3d] text-black' : 'bg-white/10 text-white'
            }`}
          >
            URL
          </button>
          <button
            type="button"
            onClick={() => {
              setUploadMode('upload');
              setPreview(null);
            }}
            className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors ${
              uploadMode === 'upload' ? 'bg-[#94cb3d] text-black' : 'bg-white/10 text-white'
            }`}
          >
            Upload
          </button>
        </div>

        {uploadMode === 'url' ? (
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Image URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => handleUrlChange(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white text-sm"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Upload Image</label>
            {preview ? (
              <div className="relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                  }}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-white/20 rounded-lg p-4 text-center hover:border-[#94cb3d]/50 transition-colors">
                <input
                  type="file"
                  id={`image-upload-${id}`}
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <label
                  htmlFor={`image-upload-${id}`}
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                  <p className="text-gray-400 text-sm">
                    {file ? file.name : 'Click to upload image'}
                  </p>
                </label>
              </div>
            )}
            {file && (
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="mt-2 w-full px-4 py-2 bg-[#94cb3d] text-black rounded-lg font-semibold hover:bg-[#7ab32d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {uploading ? 'Uploading...' : 'Upload Image'}
              </button>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Alt Text</label>
          <input
            type="text"
            value={alt}
            onChange={(e) => handleAltChange(e.target.value)}
            placeholder="Image description for accessibility"
            className="w-full px-3 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white text-sm"
          />
        </div>
      </div>
    </div>
  );
}
