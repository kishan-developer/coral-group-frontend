'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';

interface Vertical {
  id: number;
  name: string;
  description: string;
  area: string;
  phone?: string;
  email?: string;
  hours?: string;
  coordinates: { lat: number; lng: number };
}

export default function VerticalMapSection() {
  const [selectedVertical, setSelectedVertical] = useState<number>(1);

  const verticals: Vertical[] = [
    {
      id: 1,
      name: 'CoralGreens Buildtech',
      description: 'Innovative and sustainable real estate projects',
      area: 'Varanasi',
      phone: '+91 7800000097',
      email: 'info@coral-group.in',
      hours: '9:00 AM - 6:00 PM',
      coordinates: { lat: 25.2677, lng: 82.9913 }
    },
    {
      id: 2,
      name: 'Coral Fashion',
      description: 'Exquisite textiles and sarees',
      area: 'Varanasi',
      phone: '+91 7800000098',
      email: 'fashion@coral-group.in',
      hours: '10:00 AM - 7:00 PM',
      coordinates: { lat: 25.2820, lng: 83.0050 }
    },
    {
      id: 3,
      name: 'Coral Export',
      description: 'Global export ventures',
      area: 'Varanasi',
      phone: '+91 7800000099',
      email: 'export@coral-group.in',
      hours: '10:00 AM - 6:00 PM',
      coordinates: { lat: 25.3108, lng: 83.0076 }
    },
    {
      id: 4,
      name: 'Coral F&B',
      description: 'Food & Beverage innovation and excellence',
      area: 'Varanasi',
      phone: '+91 7800000100',
      email: 'fnb@coral-group.in',
      hours: '8:00 AM - 8:00 PM',
      coordinates: { lat: 25.3176, lng: 82.9739 }
    }
  ];

  const selected = verticals.find(v => v.id === selectedVertical) || verticals[0];

  // Load Google Maps
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // ← Add your API key here
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4 text-2xl font-semibold">Our Verticals</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore Coral Group’s diverse verticals and see where innovation happens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-3 max-h-[600px] overflow-y-auto">
            {verticals.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVertical(v.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedVertical === v.id
                    ? 'border-[#94CB3D] bg-gray-800 shadow-md'
                    : 'border-gray-700 bg-black hover:border-[#94CB3D]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      selectedVertical === v.id ? 'bg-[#94CB3D]' : 'bg-gray-700'
                    }`}
                  >
                    <MapPin
                      className={`w-5 h-5 ${
                        selectedVertical === v.id ? 'text-black' : 'text-white'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`mb-1 truncate ${
                        selectedVertical === v.id ? 'text-[#94CB3D] font-semibold' : 'text-white'
                      }`}
                    >
                      {v.name}
                    </h3>
                    <p className="text-gray-400">{v.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="h-[400px] rounded-xl overflow-hidden border-2 border-gray-700">
              <GoogleMap
                center={selected.coordinates}
                zoom={13}
                mapContainerClassName="w-full h-full"
                options={{
                  styles: [
                    { elementType: 'geometry', stylers: [{ color: '#1e1e1e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#ffffff' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#1e1e1e' }] },
                    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0e0e0e' }] },
                  ],
                  disableDefaultUI: true,
                }}
              >
                {verticals.map((v) => (
                  <Marker
                    key={v.id}
                    position={v.coordinates}
                    onClick={() => setSelectedVertical(v.id)}
                    icon={{
                      path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
                      fillColor: v.id === selectedVertical ? "#94CB3D" : "#ffffff",
                      fillOpacity: 1,
                      strokeWeight: 0,
                      scale: 1.5,
                    }}
                  />
                ))}

                {/* Info Window */}
                {selected && (
                  <InfoWindow
                    position={selected.coordinates}
                    onCloseClick={() => setSelectedVertical(0)}
                  >
                    <div className="text-black bg-white p-2 rounded">
                      <h3 className="font-semibold">{selected.name}</h3>
                      <p className="text-sm">{selected.area}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </div>

            {/* Vertical Details */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[#94CB3D] mb-2 text-xl font-semibold">{selected.name}</h3>
                  <p className="text-gray-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white" />
                    {selected.area}
                  </p>
                  <p className="text-gray-300 mt-2">{selected.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {selected.phone && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-[#94CB3D]" />
                    <div>
                      <p className="text-gray-500">Phone</p>
                      <p>{selected.phone}</p>
                    </div>
                  </div>
                )}

                {selected.email && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-[#94CB3D]" />
                    <div>
                      <p className="text-gray-500">Email</p>
                      <p className="truncate">{selected.email}</p>
                    </div>
                  </div>
                )}

                {selected.hours && (
                  <div className="flex items-center gap-3 text-gray-300 md:col-span-2">
                    <Clock className="w-5 h-5 text-[#94CB3D]" />
                    <div>
                      <p className="text-gray-500">Operating Hours</p>
                      <p>{selected.hours}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button className="flex-1 bg-[#94CB3D] text-black px-6 py-3 rounded-lg hover:bg-[#82b032] transition-colors">
                  View Services
                </button>
                <button className="flex-1 border-2 border-[#94CB3D] text-[#94CB3D] px-6 py-3 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
