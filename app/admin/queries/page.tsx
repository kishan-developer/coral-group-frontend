"use client";

import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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

interface Query {
  _id: string;
  clientName: string;
  email: string;
  phone: string;
  propertyInterest?: string;
  verticalInterest?: string;
  message?: string;
  status: string;
  stage: string;
  source: string;
  assignedExecutive?: any;
  value?: string;
  notes?: string;
  followup?: string;
  createdAt: string;
}

export default function QueriesPage() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [selectedQueries, setSelectedQueries] = useState<string[]>([]);
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    status: '',
    stage: '',
    assignedExecutive: '',
    value: '',
    notes: '',
    followup: ''
  });

  useEffect(() => {
    fetchQueries();
  }, [page, statusFilter, stageFilter]);

  const fetchQueries = async () => {
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
      });
      
      if (statusFilter) params.append('status', statusFilter);
      if (stageFilter) params.append('stage', stageFilter);

      const response = await fetch(`${API_BASE_URL}/queries?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setQueries(data.data);
        setTotal(data.total);
      }
    } catch (error) {
      console.error('Error fetching queries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = async () => {
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams();
      
      if (statusFilter) params.append('status', statusFilter);
      if (stageFilter) params.append('stage', stageFilter);

      const response = await fetch(`${API_BASE_URL}/queries/export?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `queries-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error exporting queries:', error);
    }
  };

  const handleExportPDF = async () => {
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams();
      
      if (statusFilter) params.append('status', statusFilter);
      if (stageFilter) params.append('stage', stageFilter);

      const response = await fetch(`${API_BASE_URL}/queries?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const data = await response.json();
      if (data.success) {
        const queries = data.data;
        
        // Create PDF with A4 size
        const doc = new jsPDF('p', 'mm', 'a4');
        
        // Add title
        doc.setFontSize(18);
        doc.text('Queries Report', 14, 15);
        
        doc.setFontSize(10);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 22);
        doc.text(`Total Queries: ${queries.length}`, 14, 28);
        
        // Prepare table data
        const tableData = queries.map((query: Query) => [
          query.clientName,
          query.email,
          query.phone,
          query.propertyInterest || 'N/A',
          query.status,
          query.stage,
          query.source,
          new Date(query.createdAt).toLocaleDateString()
        ]);
        
        // Add table
        autoTable(doc, {
          head: [['Client Name', 'Email', 'Phone', 'Property Interest', 'Status', 'Stage', 'Source', 'Created']],
          body: tableData,
          startY: 35,
          styles: {
            fontSize: 8,
            cellPadding: 2,
          },
          headStyles: {
            fillColor: [148, 203, 61],
            textColor: [0, 0, 0],
            fontStyle: 'bold',
          },
          alternateRowStyles: {
            fillColor: [245, 245, 245],
          },
          margin: { top: 35, left: 14, right: 14 },
        });
        
        // Save PDF
        doc.save(`queries-${Date.now()}.pdf`);
      }
    } catch (error) {
      console.error('Error exporting PDF:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this query?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/queries/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchQueries();
      }
    } catch (error) {
      console.error('Error deleting query:', error);
    }
  };

  const handleView = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/queries/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setSelectedQuery(data.data);
        setShowEditModal(true);
        setEditFormData({
          status: data.data.status,
          stage: data.data.stage,
          assignedExecutive: data.data.assignedExecutive?._id || '',
          value: data.data.value || '',
          notes: data.data.notes || '',
          followup: data.data.followup || ''
        });
      }
    } catch (error) {
      console.error('Error fetching query details:', error);
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/queries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editFormData),
      });

      if (response.ok) {
        setShowEditModal(false);
        fetchQueries();
      }
    } catch (error) {
      console.error('Error updating query:', error);
    }
  };

  const filteredQueries = queries.filter(q =>
    q.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.phone.includes(searchTerm)
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
          <h1 className="text-3xl font-bold">Queries Management</h1>
          <p className="text-gray-400 mt-2">Manage and track all incoming queries</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 bg-[#94cb3d] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#7ab532] transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={handleExportPDF}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search queries..."
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
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#94cb3d] outline-none"
          >
            <option value="">All Stages</option>
            <option value="New">New</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Site Visit">Site Visit</option>
            <option value="Closed">Closed</option>
            <option value="Lost">Lost</option>
          </select>
          <button
            onClick={() => {
              setSearchTerm('');
              setStatusFilter('');
              setStageFilter('');
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
          <p className="text-gray-400 text-sm">Total Queries</p>
          <p className="text-2xl font-bold mt-1">{total}</p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
          <p className="text-gray-400 text-sm">Pending</p>
          <p className="text-2xl font-bold mt-1 text-yellow-400">
            {queries.filter(q => q.status === 'Pending').length}
          </p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
          <p className="text-gray-400 text-sm">In Progress</p>
          <p className="text-2xl font-bold mt-1 text-blue-400">
            {queries.filter(q => q.status === 'In Progress').length}
          </p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
          <p className="text-gray-400 text-sm">Confirmed</p>
          <p className="text-2xl font-bold mt-1 text-green-400">
            {queries.filter(q => q.status === 'Confirmed').length}
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
                  <input
                    type="checkbox"
                    checked={selectedQueries.length === filteredQueries.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedQueries(filteredQueries.map(q => q._id));
                      } else {
                        setSelectedQueries([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Stage
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Source
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
              {filteredQueries.map((query) => (
                <tr key={query._id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedQueries.includes(query._id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedQueries([...selectedQueries, query._id]);
                        } else {
                          setSelectedQueries(selectedQueries.filter(id => id !== query._id));
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold">{query.clientName}</p>
                      <p className="text-sm text-gray-400">{query.propertyInterest || 'N/A'}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-300">{query.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-300">{query.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        query.status === 'Confirmed'
                          ? 'bg-green-500/20 text-green-400'
                          : query.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-400'
                          : query.status === 'Cancelled'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {query.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-300">{query.stage}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-300">{query.source}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(query.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleView(query._id)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleView(query._id)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(query._id)}
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

      {/* Edit Modal */}
      {showEditModal && selectedQuery && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] rounded-xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-bold">Edit Query</h2>
              <p className="text-gray-400 text-sm mt-1">Update query details and status</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Client Name</label>
                  <p className="text-white">{selectedQuery.clientName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <p className="text-white">{selectedQuery.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                  <p className="text-white">{selectedQuery.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Property Interest</label>
                  <p className="text-white">{selectedQuery.propertyInterest || 'N/A'}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <p className="text-white bg-black/50 p-3 rounded-lg">{selectedQuery.message || 'N/A'}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
                  <select
                    value={editFormData.status}
                    onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#94cb3d] outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Stage</label>
                  <select
                    value={editFormData.stage}
                    onChange={(e) => setEditFormData({ ...editFormData, stage: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#94cb3d] outline-none"
                  >
                    <option value="New">New</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Negotiation">Negotiation</option>
                    <option value="Site Visit">Site Visit</option>
                    <option value="Closed">Closed</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Value</label>
                <input
                  type="text"
                  value={editFormData.value}
                  onChange={(e) => setEditFormData({ ...editFormData, value: e.target.value })}
                  placeholder="e.g., ₹50 L or ₹2 Cr"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#94cb3d] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Internal Notes</label>
                <textarea
                  value={editFormData.notes}
                  onChange={(e) => setEditFormData({ ...editFormData, notes: e.target.value })}
                  placeholder="Add internal notes about this query..."
                  rows={3}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#94cb3d] outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Follow-up Actions</label>
                <textarea
                  value={editFormData.followup}
                  onChange={(e) => setEditFormData({ ...editFormData, followup: e.target.value })}
                  placeholder="Add follow-up actions for this query..."
                  rows={3}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#94cb3d] outline-none resize-none"
                />
              </div>
            </div>
            <div className="p-6 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdate(selectedQuery._id)}
                className="px-4 py-2 rounded-lg bg-[#94cb3d] text-black font-semibold hover:bg-[#7ab532] transition-colors"
              >
                Update Query
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
