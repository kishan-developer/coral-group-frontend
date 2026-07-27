import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  ArrowLeft,
  ChevronRight,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Quote,
  Play
} from 'lucide-react';
import { blogData, BlogPost } from '../../../../data/blogData';

export async function generateStaticParams() {
  return blogData.map((post: BlogPost) => ({
    id: post.id,
  }));
}

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const blog = blogData.find((item: BlogPost) => item.id === id);

  if (!blog) {
    return (
      <div className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4 uppercase">Post Not Found</h1>
          <Link href="/news/blogs" className="text-[#94cb3d] font-bold uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogData
    .filter((item: BlogPost) => blog.relatedIds.includes(item.id))
    .slice(0, 3);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* 1. Blog Header / Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden border-b border-gray-900">
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/news/blogs" className="flex items-center text-gray-500 hover:text-[#94cb3d] transition-colors mb-12 text-xs font-black uppercase tracking-widest group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform" size={16} /> Back to Journal
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-[#94cb3d] text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] font-bold">{blog.category}</span>
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Calendar size={12} className="text-[#94cb3d]" /> {blog.date}
              </span>
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Clock size={12} className="text-[#94cb3d]" /> {blog.readTime}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 mt-12">
              <img src={blog.author.img} className="w-14 h-14 rounded-full border border-gray-800 p-1 object-cover" alt={blog.author.name} />
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-500">Words By</p>
                <p className="font-bold text-[#94cb3d]">{blog.author.name}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container mx-auto px-6 -mt-10 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="h-[60vh] rounded-[3rem] overflow-hidden border border-gray-800 shadow-2xl relative">
          <img src={blog.coverImg} className="w-full h-full object-cover" alt={blog.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">

        {/* 2. Sticky Sidebar (TOC & Share) */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32 space-y-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6 font-bold">Contents</h4>
              <nav className="flex flex-col gap-4">
                {blog.tableOfContents.map((item: { id: string; label: string }) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm font-bold text-gray-500 hover:text-[#94cb3d] transition-all flex items-center group decoration-none"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#94cb3d] mr-0 group-hover:mr-2 transition-all"></span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-gray-900">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6 font-bold">Share Story</h4>
              <div className="flex gap-4">
                <button className="p-3 bg-[#111] rounded-xl border border-gray-800 text-gray-500 hover:text-[#94cb3d] hover:border-[#94cb3d] transition-all"><Linkedin size={18} /></button>
                <button className="p-3 bg-[#111] rounded-xl border border-gray-800 text-gray-500 hover:text-[#94cb3d] hover:border-[#94cb3d] transition-all"><Twitter size={18} /></button>
                <button className="p-3 bg-[#111] rounded-xl border border-gray-800 text-gray-500 hover:text-[#94cb3d] hover:border-[#94cb3d] transition-all"><Facebook size={18} /></button>
              </div>
            </div>
          </div>
        </aside>

        {/* 3, 4, 6. Main Content */}
        <article className="lg:col-span-6 space-y-16">
          <section className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter
            prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light
            prose-strong:text-[#94cb3d] prose-strong:font-bold
            prose-li:text-gray-400 prose-a:text-[#94cb3d] prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-[2rem] prose-img:border prose-img:border-gray-800">

            <div
              className="blog-content-container"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </section>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 pt-12 border-t border-gray-900">
            {blog.tags.map((tag: string) => (
              <span key={tag} className="px-5 py-2 bg-[#151515] border border-gray-800 rounded-full text-[10px] text-gray-500 font-black hover:border-[#94cb3d] hover:text-white cursor-pointer transition-all uppercase tracking-widest font-bold">#{tag}</span>
            ))}
          </div>

          {/* Author Bio */}
          <section className="bg-[#111] p-8 rounded-[2.5rem] border border-gray-800 flex flex-col md:flex-row gap-8 items-center text-center md:text-left transition-all hover:border-[#94cb3d]/20">
            <img src={blog.author.img} className="w-24 h-24 rounded-full border-4 border-gray-900 object-cover shadow-xl" alt={blog.author.name} />
            <div>
              <p className="text-[10px] font-black uppercase text-[#94cb3d] tracking-widest mb-1 font-bold">About the Author</p>
              <h4 className="text-xl font-black uppercase text-white font-bold">{blog.author.name}</h4>
              <p className="text-gray-500 text-sm italic mb-3">{blog.author.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{blog.author.bio}</p>
              <div className="mt-4 flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-gray-600 hover:text-[#94cb3d] transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="text-gray-600 hover:text-[#94cb3d] transition-colors"><Twitter size={18} /></a>
              </div>
            </div>
          </section>
        </article>

        {/* Right Sidebar - Related Blogs */}
        <aside className="lg:col-span-3 space-y-12">
          <div className="sticky top-32">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-8 border-b border-gray-900 pb-4 font-bold">Read Next</h4>
            <div className="space-y-10">
              {relatedPosts.map((post: BlogPost) => (
                <Link
                  key={post.id}
                  href={`/news/blogs/${post.id}`}
                  className="group cursor-pointer block"
                >
                  <div className="h-40 rounded-2xl overflow-hidden mb-4 border border-gray-800 transition-all group-hover:border-[#94cb3d]/30">
                    <img src={post.coverImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" alt={post.title} />
                  </div>
                  <h5 className="font-bold text-sm uppercase leading-tight group-hover:text-[#94cb3d] transition-colors line-clamp-2">{post.title}</h5>
                  <div className="mt-3 text-[10px] font-black uppercase text-gray-600 tracking-widest flex items-center group-hover:text-white transition-all font-bold">
                    View Article <ChevronRight size={14} className="ml-1" />
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 p-8 bg-[#94cb3d] rounded-[2.5rem] text-black text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/50 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              <h4 className="font-black uppercase italic text-xl mb-4 leading-none relative z-10 font-bold">Connect With Us</h4>
              <p className="text-xs font-bold opacity-70 mb-6 relative z-10">Get in touch for partnerships or project inquiries.</p>
              <button className="w-full py-4 bg-black text-[#94cb3d] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform relative z-10 font-bold">
                Contact Now
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Newsletter Block */}
      <section className="py-24 bg-[#0a0a0a] border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-[#111] p-12 md:p-16 rounded-[4rem] border border-gray-800 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#94cb3d]/5 blur-3xl rounded-full group-hover:bg-[#94cb3d]/10 transition-colors"></div>
            <div className="max-w-md relative z-10">
              <h3 className="text-3xl font-black italic uppercase mb-2 tracking-tighter">Stay Ahead.</h3>
              <p className="text-gray-500 text-sm font-medium">Join our network for monthly insights into urbanism and engineering.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2 relative z-10">
              <input type="email" placeholder="Email address" className="bg-black border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-[#94cb3d] text-sm flex-1 md:w-64 transition-all" />
              <button className="bg-[#94cb3d] text-black p-4 rounded-2xl hover:scale-110 active:scale-95 transition-all"><Mail size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0f0f0f; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94cb3d; }
        
        .blog-content-container h2 {
          font-size: 1.875rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          letter-spacing: -0.05em;
          color: white;
        }
        
        .blog-content-container p {
          font-size: 1.125rem;
          line-height: 2;
          color: #9ca3af;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }
        
        .blog-content-container ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 2rem;
        }
        
        .blog-content-container li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: #9ca3af;
        }
        
        .blog-content-container li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.75rem;
          width: 0.5rem;
          height: 1px;
          background: #94cb3d;
        }
        
        .blog-content-container strong {
          color: #94cb3d;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default BlogDetailPage;
