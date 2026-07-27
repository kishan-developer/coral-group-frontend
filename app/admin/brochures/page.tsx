"use client";

import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Phone,
  Mail,
  MapPin,
  FileText
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000/api/v1';

interface BrochureRequest {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string;
  brochureType: string;
  brochureTitle: string;
  status: string;
  downloaded: boolean;
  downloadedAt?: string;
  notes?: string;
  createdAt: string;
}

export default function BrochuresPage() {
  const [requests, setRequests] = useState<BrochureRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [brochureTypeFilter, setBrochureTypeFilter] = useState('');

  useEffect(() => {
    fetchRequests();
  }, [page, statusFilter, brochureTypeFilter]);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
      });
      
      if (statusFilter) params.append('status', statusFilter);
      if (brochureTypeFilter) params.append('brochureType', brochureTypeFilter);

      const response = await fetch(`${API_BASE_URL}/brochure?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setRequests(data.data);
        setTotal(data.total);
      }
    } catch (error) {
      console.error('Error fetching brochure requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams();
      
      if (statusFilter) params.append('status', statusFilter);
      if (brochureTypeFilter) params.append('brochureType', brochureTypeFilter);

      const response = await fetch(`${API_BASE_URL}/brochure/export?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `brochure-requests-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error exporting brochure requests:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this request?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/brochure/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchRequests();
      }
    } catch (error) {
      console.error('Error deleting request:', error);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/brochure/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchRequests();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredRequests = requests.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.phone.includes(searchTerm)
  );

  const totalPages = Math.ceil(total / 10);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#94cb3d]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Brochure Downloads</h1>
          <p className="text-gray-400 mt-2">Track and manage brochure download requests</p>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-[#94cb3d] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#7ab532] transition-colors"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:border-[#94cb3d] outline-none"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#94cb3d] outline-none"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
            <option value="closed">Closed</option>
          </select>
          <select
            value={brochureTypeFilter}
            onChange={(e) => setBrochureTypeFilter(e.target.value)}
            className="bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#94cb3d] outline-none"
          >
            <option value="">All Brochures</option>
            <option value="coral-skyline">Coral Skyline</option>
            <option value="coral-studio">Coral Studio</option>
            <option value="coral-garden">Coral Garden</option>
            <option value="brochure-access">Brochure Access</option>
          </select>
          <button
            onClick={() => {
              setSearchTerm('');
              setStatusFilter('');
              setBrochureTypeFilter('');
            }}
            className="flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Clear Filters
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
          <p className="text-gray-400 text-sm">Total Requests</p>
          <p className="text-2xl font-bold mt-1">{total}</p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
          <p className="text-gray-400 text-sm">Downloaded</p>
          <p className="text-2xl font-bold mt-1 text-cyan-400">
            {requests.filter(r => r.downloaded).length}
          </p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
          <p className="text-gray-400 text-sm">Pending Contact</p>
          <p className="text-2xl font-bold mt-1 text-yellow-400">
            {requests.filter(r => r.status === 'pending').length}
          </p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
          <p className="text-gray-400 text-sm">Converted</p>
          <p className="text-2xl font-bold mt-1 text-green-400">
            {requests.filter(r => r.status === 'converted').length}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Brochure
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Project Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Downloaded
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredRequests.map((request) => (
                <tr key={request._id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold">{request.name}</p>
                      <p className="text-sm text-gray-400 truncate max-w-xs">{request.address}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-300">{request.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-300">{request.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#94cb3d]" />
                      <div>
                        <p className="font-medium text-sm">{request.brochureTitle}</p>
                        <p className="text-xs text-gray-500">{request.brochureType}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400">
                      {request.projectType.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={request.status}
                      onChange={(e) => handleStatusUpdate(request._id, e.target.value)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-0 outline-none cursor-pointer ${
                        request.status === 'converted'
                          ? 'bg-green-500/20 text-green-400'
                          : request.status === 'contacted'
                          ? 'bg-blue-500/20 text-blue-400'
                          : request.status === 'closed'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {request.downloaded ? (
                        <span className="flex items-center gap-1 text-green-400 text-sm">
                          <Download className="w-3 h-3" />
                          Yes
                        </span>
                      ) : (
                        <span className="text-gray-500 text-sm">No</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(request.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(request._id)}
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
          <p className="text-sm text-gray-400">
            Showing {((page - 1) * 10) + 1} to {Math.min(page * 10, total)} of {total} results
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-1 rounded-lg ${
                  page === p
                    ? 'bg-[#94cb3d] text-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
