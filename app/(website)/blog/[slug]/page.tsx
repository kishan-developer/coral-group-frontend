"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, User, Tag, ArrowLeft, ArrowRight, Clock, Share2, Image as ImageIcon } from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000/api/v1';

interface ContentBlock {
  id: string;
  type: 'text' | 'image';
  content?: string;
  url?: string;
  alt?: string;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  views: number;
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);

  useEffect(() => {
    fetchPost();
  }, [params.slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/blog-posts/public/${params.slug}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      
      const data = await response.json();
      
      if (!data.success || !data.data) {
        throw new Error('Blog post not found');
      }
      
      setPost(data.data);
      
      // Parse content blocks
      if (data.data.content) {
        try {
          const blocks = JSON.parse(data.data.content);
          // Fix malformed content blocks where content is stored as character indices
          const fixedBlocks = blocks.map((block: any) => {
            if (block.type === 'text') {
              // Check if content is malformed (has character indices)
              if (block.content === '' && Object.keys(block).some(key => /^\d+$/.test(key))) {
                // Reconstruct content from character indices
                const chars = Object.keys(block)
                  .filter(key => /^\d+$/.test(key))
                  .sort((a, b) => parseInt(a) - parseInt(b))
                  .map(key => block[key])
                  .join('');
                return { ...block, content: chars };
              }
            } else if (block.type === 'image') {
              // Log image blocks for debugging
              console.log('Image block:', block);
            }
            return block;
          });
          setContentBlocks(Array.isArray(fixedBlocks) ? fixedBlocks : []);
        } catch (e) {
          // If content is not JSON, treat as single text block
          setContentBlocks([{ id: Date.now().toString(), type: 'text', content: data.data.content }]);
        }
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load blog post. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateReadingTime = () => {
    if (!contentBlocks.length) return 1;
    
    let totalWords = 0;
    contentBlocks.forEach(block => {
      if (block.type === 'text' && block.content) {
        // Strip HTML tags and count words
        const text = block.content.replace(/<[^>]*>/g, '');
        totalWords += text.split(/\s+/).filter(word => word.length > 0).length;
      }
    });
    
    const wordsPerMinute = 200;
    return Math.max(1, Math.ceil(totalWords / wordsPerMinute));
  };

  const handleShare = async () => {
    if (!post) return;
    
    // Get clean URL based on post slug
    const cleanUrl = `${window.location.origin}/blog/${post.slug}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: cleanUrl,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(cleanUrl);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#94cb3d]"></div>
          <p className="text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error || 'Post not found'}</p>
          <button
            onClick={() => router.push('/blog')}
            className="px-6 py-2 bg-[#94cb3d] text-black rounded-lg font-semibold hover:bg-[#7ab32d] transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-50">
      {/* Header */}
      <header className=" sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            title="Share article"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="px-3 py-1 bg-[#94cb3d] text-black text-sm font-semibold rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt || post.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{calculateReadingTime()} min read</span>
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-8">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-xl"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <div className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-[#94cb3d] pl-4">
            {post.excerpt}
          </div>
        )}

        {/* Content Blocks */}
        <div className="space-y-8">
          {contentBlocks.length === 0 ? (
            <p className="text-gray-500">No content available</p>
          ) : (
            contentBlocks.map((block, index) => (
              <div key={block.id || index}>
                {block.type === 'text' ? (
                  <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#94cb3d] prose-strong:text-white prose-code:text-[#94cb3d] prose-pre:bg-[#1a1a1a] prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-ul:list-disc prose-ol:list-decimal prose-blockquote:border-l-4 prose-blockquote:border-[#94cb3d] prose-blockquote:pl-4 prose-blockquote:italic"
                    dangerouslySetInnerHTML={{ __html: block.content || '' }}
                  />
                ) : block.type === 'image' ? (
                  <div className="my-8">
                    {block.url ? (
                      <>
                        <img
                          src={block.url}
                          alt={block.alt || post.title}
                          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                          style={{ maxHeight: '800px', objectFit: 'contain' }}
                          onError={(e) => {
                            console.error('Image failed to load:', block.url);
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        {block.alt && (
                          <p className="text-sm text-gray-500 mt-2 text-center italic">
                            {block.alt}
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="bg-[#1a1a1a] rounded-lg p-8 text-center border border-white/10">
                        <ImageIcon className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                        <p className="text-gray-500">Image not available</p>
                        <p className="text-xs text-gray-600 mt-1">URL: {block.url || 'empty'}</p>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 font-medium">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#94cb3d] hover:text-[#94cb3d] transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">More Articles</h3>
          <button
            onClick={() => router.push('/blog')}
            className="inline-flex items-center gap-2 text-[#94cb3d] font-semibold hover:gap-3 transition-all"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

   
    </div>
  );
}
