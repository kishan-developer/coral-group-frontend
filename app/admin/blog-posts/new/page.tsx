"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Save,
  Image as ImageIcon,
  X,
  Plus,
  Type,
  Image as ImageIcon2
} from 'lucide-react';
import ContentBlock from '@/components/admin/ContentBlock';
import ImageBlock from '@/components/admin/ImageBlock';
import toast from 'react-hot-toast';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000/api/v1';

interface ContentBlock {
  id: string;
  type: 'text' | 'image';
  content?: string;
  url?: string;
  alt?: string;
}

export default function NewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    author: '',
    category: '',
    tags: '',
    status: 'draft' as 'draft' | 'published' | 'archived',
    notes: '',
    followup: '',
    queryStatus: 'pending' as 'pending' | 'in-progress' | 'resolved' | 'closed',
    priority: 'medium' as 'low' | 'medium' | 'high' | 'urgent',
  });

  const handleFeaturedImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeaturedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTextBlock = () => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type: 'text',
      content: '',
    };
    setContentBlocks([...contentBlocks, newBlock]);
    setShowBlockMenu(false);
  };

  const addImageBlock = () => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type: 'image',
      url: '',
      alt: '',
    };
    setContentBlocks([...contentBlocks, newBlock]);
    setShowBlockMenu(false);
  };

  const updateBlock = (id: string, data: any) => {
    setContentBlocks(contentBlocks.map(block => {
      if (block.id === id) {
        // If updating content, ensure it's a string and not an object
        if (data.content !== undefined) {
          return { ...block, content: String(data.content) };
        }
        return { ...block, ...data };
      }
      return block;
    }));
  };

  const deleteBlock = (id: string) => {
    setContentBlocks(contentBlocks.filter(block => block.id !== id));
  };

  const moveBlockUp = (id: string) => {
    const index = contentBlocks.findIndex(block => block.id === id);
    if (index > 0) {
      const newBlocks = [...contentBlocks];
      [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
      setContentBlocks(newBlocks);
    }
  };

  const moveBlockDown = (id: string) => {
    const index = contentBlocks.findIndex(block => block.id === id);
    if (index < contentBlocks.length - 1) {
      const newBlocks = [...contentBlocks];
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      setContentBlocks(newBlocks);
    }
  };

  const handleImageUpload = async (file: File): Promise<string> => {
    const token = localStorage.getItem('token');
    const imageFormData = new FormData();
    imageFormData.append('image', file);
    
    console.log('Uploading content image to:', `${API_BASE_URL}/blog-posts/upload-content`);
    console.log('Token present:', !!token);
    
    const imageResponse = await fetch(`${API_BASE_URL}/blog-posts/upload-content`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: imageFormData,
    });
    
    console.log('Upload response status:', imageResponse.status);
    
    if (imageResponse.ok) {
      const imageData = await imageResponse.json();
      console.log('Upload response data:', imageData);
      return imageData.url;
    } else {
      const errorData = await imageResponse.json();
      console.error('Upload failed:', errorData);
      toast.error(errorData.message || 'Upload failed');
      throw new Error(errorData.message || 'Upload failed');
    }
  };

  const removeImage = () => {
    setFeaturedImage(null);
    setImageFile(null);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      
      // Upload featured image if exists
      let imageUrl = '';
      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append('image', imageFile);
        
        const imageResponse = await fetch(`${API_BASE_URL}/blog-posts/upload`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: imageFormData,
        });
        
        if (imageResponse.ok) {
          const imageData = await imageResponse.json();
          imageUrl = imageData.url;
        }
      }

      const response = await fetch(`${API_BASE_URL}/blog-posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
          featuredImage: imageUrl,
          content: JSON.stringify(contentBlocks),
        }),
      });

      if (response.ok) {
        router.push('/admin/blog-posts');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Create New Blog Post</h1>
            <p className="text-gray-400 mt-1">Write and publish your content</p>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-2 bg-[#94cb3d] text-black rounded-lg font-semibold hover:bg-[#7ab32d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="w-5 h-5" />
          {loading ? 'Saving...' : 'Publish Post'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Enter post title..."
                className="w-full px-4 py-3 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white text-xl font-semibold"
                required
              />
            </div>

            {/* Slug */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">URL Slug</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">/blog/</span>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="flex-1 px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white"
                  required
                />
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Featured Image</label>
              {featuredImage ? (
                <div className="relative w-full">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={featuredImage}
                      alt="Featured"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[#94cb3d]/50 transition-colors">
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleFeaturedImageUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                    <p className="text-gray-400">Click to upload featured image</p>
                    <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </label>
                </div>
              )}
            </div>

            {/* Excerpt */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief description of the post..."
                className="w-full px-4 py-3 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white h-24 resize-none"
                required
              />
            </div>

            {/* Content Builder */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-400">Content Blocks</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowBlockMenu(!showBlockMenu)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#94cb3d] text-black rounded-lg font-semibold hover:bg-[#7ab32d] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Block
                  </button>
                  
                  {showBlockMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl z-10">
                      <button
                        type="button"
                        onClick={addTextBlock}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors text-left"
                      >
                        <Type className="w-4 h-4" />
                        <span>Text Block</span>
                      </button>
                      <button
                        type="button"
                        onClick={addImageBlock}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors text-left"
                      >
                        <ImageIcon2 className="w-4 h-4" />
                        <span>Image Block</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {contentBlocks.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-white/20 rounded-lg">
                  <p className="text-gray-400">No content blocks yet. Click "Add Block" to start building your content.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {contentBlocks.map((block, index) => (
                    <div key={block.id}>
                      {block.type === 'text' ? (
                        <ContentBlock
                          id={block.id}
                          content={block.content || ''}
                          onUpdate={updateBlock}
                          onDelete={deleteBlock}
                          onMoveUp={moveBlockUp}
                          onMoveDown={moveBlockDown}
                          isFirst={index === 0}
                          isLast={index === contentBlocks.length - 1}
                        />
                      ) : (
                        <ImageBlock
                          id={block.id}
                          url={block.url || ''}
                          alt={block.alt || ''}
                          onUpdate={updateBlock}
                          onDelete={deleteBlock}
                          onMoveUp={moveBlockUp}
                          onMoveDown={moveBlockDown}
                          isFirst={index === 0}
                          isLast={index === contentBlocks.length - 1}
                          onUpload={handleImageUpload}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Author name"
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white"
                required
              />
            </div>

            {/* Category */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., Technology, Tutorial"
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white"
                required
              />
            </div>

            {/* Tags */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Tags</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="react, tutorial, web"
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white"
              />
              <p className="text-xs text-gray-500 mt-2">Separate tags with commas</p>
            </div>

            {/* Status */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Query Status */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Query Status</label>
              <select
                value={formData.queryStatus}
                onChange={(e) => setFormData({ ...formData, queryStatus: e.target.value as any })}
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* Priority */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            {/* Notes */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Internal Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Add internal notes..."
                rows={4}
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white resize-none"
              />
            </div>

            {/* Followup */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Follow-up Actions</label>
              <textarea
                value={formData.followup}
                onChange={(e) => setFormData({ ...formData, followup: e.target.value })}
                placeholder="Add follow-up actions..."
                rows={4}
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#94cb3d] text-white resize-none"
              />
            </div>

            {/* Preview Card */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Preview</h3>
              <div className="space-y-3">
                {featuredImage && (
                  <img
                    src={featuredImage}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                )}
                <h4 className="font-semibold">{formData.title || 'Post Title'}</h4>
                <p className="text-sm text-gray-400">{formData.excerpt || 'Post excerpt will appear here...'}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{formData.author || 'Author'}</span>
                  <span>•</span>
                  <span>{formData.category || 'Category'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
