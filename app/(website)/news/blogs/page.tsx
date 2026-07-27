"use client";

import React, { useState } from 'react';
import {
  Search,
  Calendar,
  Tag,
  ArrowRight,
  TrendingUp,
  ChevronRight,
  Mail,
  Filter,
  Clock,
  Archive,
  Share2
} from 'lucide-react';
import Link from 'next/link';

import { blogData, BlogPost } from '../../../data/blogData';

const BrandColor = "#94cb3d";

const App = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    "All", "Real Estate", "Fashion", "Hospitality", "Corporate", "CSR Activities"
  ];

  const filteredPosts = blogData.filter((post: BlogPost) => {
    const matchesFilter = filter === 'All' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const trendingPosts = blogData.filter((p: BlogPost) => blogData.indexOf(p) < 3); // Mocking trending with first 3

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">

      {/* 1. Hero / Introduction Section */}
      <header className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Office/AMN_4991.jpeg"
            className="w-full h-full object-cover scale-105 opacity-50"
            alt="Office"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-1 h-24 bg-[#94cb3d]"></div>
            <div>
              <p className="text-[#94cb3d] font-bold tracking-[0.3em] uppercase text-sm mb-2">Coral-Group</p>
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none uppercase">
                Blogs <br />
                {/* <span className='text-[#94cb3d]'>Coral-Group</span> */}
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
            Explore Coral Group’s key moments, global celebrations, and the milestones that define our legacy of excellence.
          </p>
        </div>
      </header>


      {/* 3. Featured Event Blog */}
      <section className="py-10 container mx-auto px-6">
        <Link href={`/news/blogs/${blogData[0].id}`}>
          <div className="bg-[#111] rounded-[1rem] overflow-hidden border border-gray-800 group cursor-pointer transition-all hover:border-[#94cb3d]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 h-[400px] lg:h-[550px] overflow-hidden relative">
                <img
                  src={blogData[0].coverImg}
                  className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  alt={blogData[0].title}
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-[#94cb3d] text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] font-bold">Latest Feature</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-6 font-bold">
                  <span className="flex items-center gap-1"><Calendar size={12} className="text-[#94cb3d]" /> {blogData[0].date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} className="text-[#94cb3d]" /> {blogData[0].readTime}</span>
                </div>
                <h2 className="text-4xl md:text-3xl font-black mb-6 leading-tight uppercase italic group-hover:text-[#94cb3d] transition-colors font-bold">
                  {blogData[0].title}
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light line-clamp-3">
                  {blogData[0].summary}
                </p>
                <div className="flex items-center text-[#94cb3d] font-black text-sm uppercase tracking-widest hover:gap-4 transition-all w-fit font-bold">
                  Read Full Blog <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>


      {/* 2 & 6. Search & Filters */}
      <section className="sticky top-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-gray-900 py-4">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat
                  ? 'bg-[#94cb3d] text-black border border-[#94cb3d]'
                  : 'bg-[#151515] text-gray-500 hover:text-white border border-gray-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
            <input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151515] border border-gray-800 rounded-full py-3 pl-12 pr-6 text-sm focus:border-[#94cb3d] outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* 4 & 5 & 7. Main Blog Content Area */}
      <section className="pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Blog Grid */}
          <div className="lg:col-span-8 mt-5">
            <div className="flex items-center justify-between mb-12 border-b border-gray-900 pb-6">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">Journal Entries</h3>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{filteredPosts.length} Stories</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post: BlogPost) => (
                <div key={post.id} className="bg-[#111] rounded-[1rem] border border-gray-800 overflow-hidden hover:border-[#94cb3d]/30 transition-all group">
                  <div className="h-56 overflow-hidden relative">
                    <img src={post.coverImg} className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={post.title} />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/80 backdrop-blur-md text-[#94cb3d] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 font-bold">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest mb-3 font-bold">{post.date}</p>
                    <h4 className="text-lg font-black mb-4 uppercase leading-tight group-hover:text-[#94cb3d] transition-colors line-clamp-2 font-bold">{post.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                      {post.summary}
                    </p>
                    <div className="flex justify-between items-center pt-6 border-t border-gray-800/50">
                      <Link href={`/news/blogs/${post.id}`} className="text-[#94cb3d] font-black text-[10px] uppercase tracking-[0.2em] flex items-center hover:gap-2 transition-all font-bold">
                        Read More <ChevronRight size={14} className="ml-1" />
                      </Link>
                      <Share2 size={16} className="text-gray-700 hover:text-white cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredPosts.length === 0 && (
              <div className="py-20 text-center border-2 border-dashed border-gray-900 rounded-[3rem]">
                <p className="text-gray-600 font-bold uppercase tracking-widest">No matching stories found.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">

            {/* 5. Trending Section */}
            <div className="bg-[#111] rounded-[2.5rem] border border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp size={20} className="text-[#94cb3d]" />
                <h4 className="font-black uppercase tracking-tighter text-xl italic">Trending Stories</h4>
              </div>
              <div className="space-y-6">
                {trendingPosts.map((post: BlogPost) => (
                  <Link key={post.id} href={`/news/blogs/${post.id}`} className="flex gap-4 group cursor-pointer">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-800">
                      <img src={post.coverImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="thumb" />
                    </div>
                    <div>
                      <p className="text-[#94cb3d] text-[9px] font-black uppercase tracking-widest mb-1 font-bold">{post.category}</p>
                      <h5 className="font-bold text-sm leading-tight group-hover:text-white transition-colors line-clamp-2 font-bold">{post.title}</h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 7. Year-Wise Archive */}
            <div className="bg-[#111] rounded-[2.5rem] border border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Archive size={20} className="text-[#94cb3d]" />
                <h4 className="font-black uppercase tracking-tighter text-xl italic">Archive</h4>
              </div>
              <div className="space-y-2">
                {["2025", "2024", "2023", "2022"].map((year: string) => (
                  <button key={year} className="w-full flex justify-between items-center py-3 px-4 rounded-xl hover:bg-[#151515] text-gray-400 hover:text-[#94cb3d] font-bold text-sm transition-all border border-transparent hover:border-gray-800">
                    <span>{year} Reports</span>
                    <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>

            {/* Tags Cloud */}
            <div className="bg-[#111] rounded-[2.5rem] border border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Tag size={20} className="text-[#94cb3d]" />
                <h4 className="font-black uppercase tracking-tighter text-xl italic">Topics</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Sustainability", "Innovation", "Global", "Dubai", "Singapore", "Governance", "GreenTech", "CSR"].map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-[#0f0f0f] border border-gray-800 rounded-lg text-[10px] text-gray-500 font-bold hover:border-[#94cb3d] cursor-pointer transition-all">#{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 9. Newsletter Signup Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#111] rounded-[3.5rem] p-12 md:p-20 text-center border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#94cb3d]/5 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <Mail className="mx-auto text-[#94cb3d] mb-6" size={40} />
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic">Subscribe to Our Insights</h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                Get monthly stories, behind-the-scenes content, and strategic updates delivered to your inbox.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your corporate email"
                  className="flex-1 bg-[#0f0f0f] border border-gray-800 rounded-full px-8 py-4 focus:border-[#94cb3d] outline-none text-sm transition-all"
                  required
                />
                <button className="bg-[#94cb3d] text-black px-10 py-4 rounded-full font-black text-sm uppercase hover:scale-105 transition-transform shrink-0">
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-[10px] text-gray-600 font-bold uppercase tracking-widest">Global news. Zero spam. One click unsubscribe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Call-to-Action Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-[#94cb3d] rounded-[4rem] p-12 md:p-24 text-black flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full -mr-48 -mt-48"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter">WANT TO COVER <br />OUR NEXT EVENT?</h2>
            <p className="text-xl font-bold opacity-80 max-w-lg italic font-serif">Contact our global PR & Media team for press accreditation and media kits.</p>
          </div>
          <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto relative z-10">
            <button className="bg-black text-[#94cb3d] px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center justify-center">
              CONTACT PR TEAM <ArrowRight className="ml-3" size={20} />
            </button>
            <div className="flex items-center justify-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
              <span className="opacity-60">Media Inquiries: media@coralgroup.com</span>
            </div>
          </div>
        </div>
      </section>



      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0f0f0f; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94cb3d; }
      `}</style>
    </div>
  );
};

export default App;