"use client";

import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Play,
  ExternalLink,
  ChevronRight,
  Award,
  Users,
  Heart,
  Building2,
  Filter,
  Clock,
  Download
} from 'lucide-react';

const BrandColor = "#94cb3d";

const App = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    "All", "Corporate", "Launches", "Conferences", "CSR", "Internal"
  ];

  const events = [
    {
      id: 1,
      category: "Corporate",
      title: "Global Leadership Summit 2024",
      date: "Nov 15, 2024",
      loc: "Dubai, UAE",
      desc: "An annual gathering of international directors to discuss the roadmap for 2025 infrastructure projects.",
      img: "/foundation_Img/IMG_5515.JPG"
    },
    {
      id: 2,
      category: "Launches",
      title: "Coral Green Tech Unveiling",
      date: "Oct 05, 2024",
      loc: "London, UK",
      desc: "Introducing our proprietary sustainable building materials to the European market.",
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      category: "CSR",
      title: "Green Canopy Initiative",
      date: "Sep 20, 2024",
      loc: "Riyadh, KSA",
      desc: "Our commitment to urban forestry, planting over 5,000 trees in partnership with local municipalities.",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      category: "Internal",
      title: "25th Anniversary Celebration",
      date: "Aug 12, 2024",
      loc: "Singapore",
      desc: "Celebrating a quarter-century of excellence with our global workforce and founding partners.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      category: "Conferences",
      title: "Sustainable Infra Expo",
      date: "July 28, 2024",
      loc: "New York, USA",
      desc: "Showcasing Coral Group's innovative urban solutions at the world's leading infrastructure trade show.",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      category: "Corporate",
      title: "Board of Directors Q3 Meet",
      date: "June 10, 2024",
      loc: "Zurich, Switzerland",
      desc: "Quarterly strategic review focused on European expansion and digital transformation.",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-[#94cb3d] selection:text-black">


      {/* 1. Hero / Introduction Section */}
      <header className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/foundation_Img/IMG_5515.JPG"
            className="w-full h-full object-cover scale-105 "
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
                Events <br />
                {/* <span className='text-[#94cb3d]'>Coral-Group</span> */}
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-gray-300 text-xl leading-relaxed ml-10">
            Explore Coral Group’s key moments, global celebrations, and the milestones that define our legacy of excellence.
          </p>
        </div>
      </header>







      {/* 3. Featured Event Section */}
      <section className="py-20 container mx-auto">
        <div className="bg-[#111] rounded-[1rem] overflow-hidden border border-gray-800 group h-[500px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" lg:h-auto overflow-hidden">
              <img
                src="/foundation_Img/IMG_5515.JPG"
                className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                alt="Featured Event"
              />
            </div>
            <div className="p-12 md:px-10 flex flex-col justify-start ">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#94cb3d] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase">Next Major Event</span>
                <span className="text-gray-500 text-xs font-bold flex items-center gap-2"><Clock size={14} /> Dec 20, 2024</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase italic">Annual Global Infrastructure <br /><span className="text-[#94cb3d]">Vision 2030 Gala.</span></h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                A prestigious evening at the Dubai Opera, bringing together global partners, government officials, and the Coral Group board to unveil the next decade of sustainable development.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#94cb3d] text-black px-10 py-4 rounded-full font-black text-sm uppercase flex items-center hover:scale-105 transition-transform">
                  Register Interest <ArrowRight className="ml-2" size={16} />
                </button>
                <button className="bg-[#151515] border border-gray-800 text-white px-10 py-4 rounded-full font-black text-sm uppercase hover:bg-white hover:text-black transition-all">
                  View Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Event Categories Filter */}
      <section className="sticky top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-gray-900 py-6">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${filter === cat
                  ? 'bg-[#94cb3d] text-black'
                  : 'bg-[#151515] text-gray-500 hover:text-white border border-gray-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-black uppercase tracking-widest">
            <Filter size={14} /> <span>{filteredEvents.length} Events Found</span>
          </div>
        </div>
      </section>


      {/* 4. All Events Grid Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-[#111] rounded-[1rem] border border-gray-800 overflow-hidden hover:border-[#94cb3d] transition-all group">
                <div className="h-64 overflow-hidden relative">
                  <img src={event.img} className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={event.title} />

                </div>
                <div className="p-5">

                  <div className="mb-5">
                    <span className="bg-black/80 backdrop-blur-md text-[#94cb3d] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">{event.category}</span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-[10px] font-black uppercase mb-4 tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-[#94cb3d]" /> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-[#94cb3d]" /> {event.loc}</span>
                  </div>
                  <h4 className="text-xl font-black mb-4 uppercase group-hover:text-[#94cb3d] transition-colors">{event.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
                    {event.desc}
                  </p>
                  <button className="flex items-center text-[#94cb3d] font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                    Read More <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Event Highlights (Masonry Style) */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[#94cb3d] font-bold tracking-[0.4em] uppercase text-xs mb-4">Gallery</h2>
            <h3 className="text-4xl font-black italic uppercase">Moments that matter</h3>
          </div>
          <button className="text-gray-500 font-bold flex items-center gap-2 hover:text-[#94cb3d] transition-colors">
            Explore All Moments <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[700px]">
          <div className="md:col-span-2 md:row-span-2 rounded-[1rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Moment" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-20 h-20 bg-[#94cb3d] rounded-full flex items-center justify-center text-black">
                <Play size={24} />
              </div>
            </div>
          </div>
          <div className="rounded-[1rem] overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Moment" />
          </div>
          <div className="rounded-[1rem] overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Moment" />
          </div>
          <div className="md:col-span-2 rounded-[1rem] overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Moment" />
          </div>
        </div>
      </section>

      {/* 8. CSR / Social Responsibility */}
      <section className="py-24 bg-[#0a0a0a] border-y border-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Heart className="text-[#94cb3d] mb-6" size={40} />
              <h2 className="text-4xl font-black mb-8 uppercase italic">Purpose Driven <br />Gatherings</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We believe that our events should reflect our values. From community plantation drives to educational seminars, Coral Group is dedicated to social impact through collaborative effort.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Users, label: "Community Workshops", desc: "Training over 1000 locals in sustainable tech." },
                  { icon: Building2, label: "Urban Renewal Support", desc: "Collaborating with cities to improve public spaces." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#111] border border-gray-800 rounded-2xl flex items-center justify-center shrink-0">
                      <item.icon className="text-[#94cb3d]" size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-white uppercase text-sm mb-1">{item.label}</h5>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#111] p-10 rounded-[3rem] border border-gray-800">
                <h4 className="text-3xl font-black text-[#94cb3d] mb-2">50k+</h4>
                <p className="text-xs uppercase font-black text-gray-500 tracking-widest mb-6">Trees Planted</p>
                <p className="text-sm text-gray-400">Total impact from our 2024 CSR Global Green Tour.</p>
              </div>
              <div className="bg-[#111] p-10 rounded-[3rem] border border-gray-800">
                <h4 className="text-3xl font-black text-[#94cb3d] mb-2">12</h4>
                <p className="text-xs uppercase font-black text-gray-500 tracking-widest mb-6">Local Charities</p>
                <p className="text-sm text-gray-400">Supported during our annual 'Month of Giving' event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Media & Press Coverage */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-black mb-12 uppercase italic">In The News</h2>
        <div className="space-y-4">
          {[
            { tag: "Press Release", title: "Coral Group Announces Record Attendance for 2024 Summit", date: "Nov 20, 2024" },
            { tag: "Media Mention", title: "Building the Future: Forbes Interviews Chairman Khalid Al-Salem", date: "Oct 15, 2024" },
            { tag: "Announcement", title: "Coral Group Awarded Best Corporate Event Series 2024", date: "Sept 30, 2024" }
          ].map((news, i) => (
            <div key={i} className="bg-[#111] p-8 rounded-3xl border border-gray-800 flex flex-col md:flex-row justify-between items-center group hover:bg-[#151515] transition-all">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <span className="text-[#94cb3d] text-[10px] font-black uppercase tracking-[0.2em] border border-[#94cb3d]/20 px-4 py-1 rounded-full">{news.tag}</span>
                <div>
                  <h5 className="font-bold text-lg group-hover:text-white transition-colors">{news.title}</h5>
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mt-1">{news.date}</p>
                </div>
              </div>
              <button className="mt-6 md:mt-0 w-12 h-12 bg-black rounded-full flex items-center justify-center text-gray-500 group-hover:text-[#94cb3d] border border-gray-800 transition-all">
                <Download size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Call to Action Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-[#94cb3d] rounded-[4rem] p-12 md:p-24 text-black flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full -mr-48 -mt-48"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter">WANT TO ATTEND <br />OUR NEXT EVENT?</h2>
            <p className="text-xl font-bold opacity-80 max-w-lg italic font-serif">Be the first to know about our upcoming summits, launches, and celebrations.</p>
          </div>
          <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto relative z-10">
            <button className="bg-black text-[#94cb3d] px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center justify-center">
              REGISTER FOR UPDATES <Calendar className="ml-3" size={20} />
            </button>
            <div className="flex items-center justify-center gap-6 text-xs font-black uppercase tracking-widest mt-2">
              <span className="opacity-60">PR Team: pr@coralgroup.com</span>
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