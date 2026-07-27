'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

interface Shelter {
  id: number;
  name: string;
  address: string;
  area: string;
  phone: string;
  email: string;
  hours: string;
  dogs: number;
  coordinates: { lat: number; lng: number };
}

export default function MapSection() {
  const [selectedShelter, setSelectedShelter] = useState<number>(1);

  const shelters: Shelter[] = [
    {
      id: 1,
      name: 'Varanasi Animal Care Center',
      address: 'Sigra, Near BHU Gate',
      area: 'Sigra',
      phone: '+91 9876543210',
      email: 'contact@varanasianimals.org',
      hours: '9:00 AM - 6:00 PM',
      dogs: 45,
      coordinates: { lat: 25.2677, lng: 82.9913 }
    },
    {
      id: 2,
      name: 'Assi Ghat Pet Shelter',
      address: 'Assi Ghat Road, Near Temple',
      area: 'Assi',
      phone: '+91 9876543211',
      email: 'info@assipetshelter.org',
      hours: '8:00 AM - 7:00 PM',
      dogs: 32,
      coordinates: { lat: 25.2820, lng: 83.0050 }
    },
    {
      id: 3,
      name: 'Godowlia Rescue Home',
      address: 'Godowlia Chowk, Main Road',
      area: 'Godowlia',
      phone: '+91 9876543212',
      email: 'help@godowliarescue.org',
      hours: '10:00 AM - 5:00 PM',
      dogs: 28,
      coordinates: { lat: 25.3108, lng: 83.0076 }
    },
    {
      id: 4,
      name: 'Cantonment Dog Haven',
      address: 'Cantonment Area, Station Road',
      area: 'Cantonment',
      phone: '+91 9876543213',
      email: 'canttdoghaven@gmail.com',
      hours: '9:00 AM - 6:00 PM',
      dogs: 38,
      coordinates: { lat: 25.3176, lng: 82.9739 }
    },
    {
      id: 5,
      name: 'Bhelpur Stray Care',
      address: 'Bhelpur Main Road, Near Hospital',
      area: 'Bhelpur',
      phone: '+91 9876543214',
      email: 'bhelpur.straycare@org.in',
      hours: '8:30 AM - 6:30 PM',
      dogs: 41,
      coordinates: { lat: 25.2897, lng: 82.9629 }
    },
    {
      id: 6,
      name: 'Mahmoorganj Animal Welfare',
      address: 'Mahmoorganj, Civil Lines',
      area: 'Mahmoorganj',
      phone: '+91 9876543215',
      email: 'welfare@mahmoorpets.org',
      hours: '9:00 AM - 5:30 PM',
      dogs: 25,
      coordinates: { lat: 25.3296, lng: 82.9874 }
    },
    {
      id: 7,
      name: 'Shivpur Compassion Center',
      address: 'Shivpur, Near Railway Colony',
      area: 'Shivpur',
      phone: '+91 9876543216',
      email: 'info@shivpurcompassion.org',
      hours: '10:00 AM - 6:00 PM',
      dogs: 36,
      coordinates: { lat: 25.3352, lng: 83.0128 }
    }
  ];

  const selected = shelters.find(s => s.id === selectedShelter) || shelters[0];

  return (
    <section className="py-50 bg-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-4 text-2xl">Find Verticals in Varanasi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse Verticals across Varanasi and find your perfect companion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar with shelters */}
          <div className="lg:col-span-1 space-y-3 max-h-[600px] overflow-y-auto">
            {shelters.map((shelter) => (
              <button
                key={shelter.id}
                onClick={() => setSelectedShelter(shelter.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedShelter === shelter.id
                    ? 'border-[#94cb3d] bg-indigo-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-indigo-300'
                }`}
              >
                <div className="flex items-start gap-3 ">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      selectedShelter === shelter.id ? 'bg-[#94cb3d]' : 'bg-gray-200'
                    }`}
                  >
                    <MapPin
                      className={`w-5 h-5 ${
                        selectedShelter === shelter.id ? 'text-white' : 'text-gray-600'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`mb-1 truncate ${
                        selectedShelter === shelter.id ? 'text-indigo-900' : 'text-gray-900'
                      }`}
                    >
                      {shelter.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{shelter.address}</p>
                    <div className="flex items-center gap-4 text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {shelter.dogs} 
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Map & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden border-2 border-gray-200 h-[400px]">
              <div className="absolute inset-0 p-8">
                {shelters.map((shelter) => {
                  const xPos = ((shelter.coordinates.lng - 82.96) / (83.02 - 82.96)) * 100;
                  const yPos = ((shelter.coordinates.lat - 25.26) / (25.34 - 25.26)) * 100;
                  return (
                    <button
                      key={shelter.id}
                      onClick={() => setSelectedShelter(shelter.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                        selectedShelter === shelter.id ? 'scale-150 z-10' : 'scale-100'
                      }`}
                      style={{
                        left: `${xPos}%`,
                        top: `${100 - yPos}%`
                      }}
                    >
                      <div className={`relative ${selectedShelter === shelter.id ? 'animate-bounce' : ''}`}>
                        <MapPin
                          className={`w-8 h-8 ${
                            selectedShelter === shelter.id
                              ? 'fill-[#ffffff] text-[#94cb3d]'
                              : 'text-[#94cb3d text-[#94cb3d]'
                          }`}
                        />
                        {selectedShelter === shelter.id && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg whitespace-nowrap">
                            <span className="text-gray-900">{shelter.area}</span>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}

                {/* Map grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <p className="text-[#94cb3d]">Varanasi, Uttar Pradesh</p>
              </div>
            </div>

            {/* Shelter Details */}
            <div className="bg-black rounded-xl p-6 border border-indigo-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white mb-2">{selected.name}</h3>
                  <p className="text-gray-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selected.address}
                  </p>
                </div>
                <div className="bg-[#94cb3d] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span>{selected.dogs} Verticals</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-[#94cb3d]" />
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p>{selected.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-[#94cb3d]" />
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="truncate">{selected.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700 md:col-span-2">
                  <Clock className="w-5 h-5 text-[#94cb3d]" />
                  <div>
                    <p className="text-gray-500">Operating Hours</p>
                    <p>{selected.hours}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button className="flex-1 bg-[#94cb3d] text-white px-6 py-3 rounded-lg hover:bg-text-[#94cb3d]/80 transition-colors">
                  View Dogs Available
                </button>
                <button className="flex-1 border-2 border-[#94cb3d] text-white px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-[#94cb3d]  mb-2">7</div>
            <div className="text-[#94cb3d] ">Active Verticals</div>
          </div>
          <div className="text-center">
            <div className="text-[#94cb3d]  mb-2">{shelters.reduce((acc, s) => acc + s.dogs, 0)}</div>
            <div className="text-[#94cb3d] ">Verticals Available</div>
          </div>
          <div className="text-center">
            <div className="text-[#94cb3d]  mb-2">1,200+</div>
            <div className="text-[#94cb3d] ">Successful Verticals</div>
          </div>
          <div className="text-center">
            <div className="text-[#94cb3d]  mb-2">24/7</div>
            <div className="text-[#94cb3d] ">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
