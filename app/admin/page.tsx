"use client";

import React, { useState, useEffect } from 'react';
import {
  Users,
  FileText,
  Download,
  TrendingUp,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000/api/v1';

interface DashboardStats {
  totalLeads: number;
  leadsChange: string;
  leadsTrend: 'up' | 'down';
  newLeads: number;
  inProgressLeads: number;
  closedLeads: number;
  lostLeads: number;
  totalProjects: number;
  activeProjects: number;
  projectsChange: string;
  projectsTrend: 'up' | 'down';
  totalRevenue: string;
  revenueGrowth: string;
  conversionRate: string;
  totalUsers: number;
  activeUsers: number;
  totalBrochureRequests: number;
  downloadedBrochures: number;
  brochuresChange: string;
  brochuresTrend: 'up' | 'down';
  brochureConversionRate: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    fetchDashboardStats();
    fetchRecentActivity();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentActivity = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/dashboard/recent-activity?limit=4`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setRecentActivity(data.data);
      }
    } catch (error) {
      console.error('Error fetching recent activity:', error);
    }
  };

  const statCards = [
    {
      title: 'Total Leads',
      value: stats?.totalLeads || 0,
      change: stats?.leadsChange || '+0%',
      trend: stats?.leadsTrend || 'up',
      icon: Users,
      color: 'bg-blue-500/20 text-blue-400',
    },
    {
      title: 'Active Projects',
      value: stats?.activeProjects || 0,
      change: stats?.projectsChange || '+0%',
      trend: stats?.projectsTrend || 'up',
      icon: Activity,
      color: 'bg-purple-500/20 text-purple-400',
    },
    {
      title: 'Brochure Downloads',
      value: stats?.downloadedBrochures || 0,
      change: stats?.brochuresChange || '+0%',
      trend: stats?.brochuresTrend || 'up',
      icon: Download,
      color: 'bg-cyan-500/20 text-cyan-400',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#94cb3d]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-400 mt-2">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10 hover:border-[#94cb3d]/50 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{card.title}</p>
                  <p className="text-3xl font-bold mt-2">{card.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {card.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4 text-[#94cb3d]" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                    <span
                      className={`text-sm ${
                        card.trend === 'up' ? 'text-[#94cb3d]' : 'text-red-400'
                      }`}
                    >
                      {card.change}
                    </span>
                    <span className="text-gray-500 text-sm">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Funnel */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold mb-4">Lead Funnel</h3>
          <div className="space-y-4">
            {[
              { stage: 'New', count: stats?.newLeads || 0, color: 'bg-blue-500' },
              { stage: 'In Progress', count: stats?.inProgressLeads || 0, color: 'bg-yellow-500' },
              { stage: 'Closed', count: stats?.closedLeads || 0, color: 'bg-green-500' },
              { stage: 'Lost', count: stats?.lostLeads || 0, color: 'bg-red-500' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{item.stage}</span>
                  <span className="font-semibold">{item.count}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} transition-all duration-500`}
                    style={{
                      width: `${stats?.totalLeads ? (item.count / stats.totalLeads) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brochure Performance */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold mb-4">Brochure Performance</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-[#94cb3d]">
                  {stats?.totalBrochureRequests || 0}
                </p>
                <p className="text-sm text-gray-400 mt-1">Total Requests</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-cyan-400">
                  {stats?.downloadedBrochures || 0}
                </p>
                <p className="text-sm text-gray-400 mt-1">Downloaded</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Conversion Rate</span>
                <span className="text-2xl font-bold text-[#94cb3d]">
                  {stats?.brochureConversionRate || '0%'}
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#94cb3d] transition-all duration-500"
                  style={{
                    width: stats?.brochureConversionRate 
                      ? parseFloat(stats.brochureConversionRate) 
                      : 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <button className="text-[#94cb3d] text-sm hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {recentActivity.length === 0 ? (
            <p className="text-gray-500 text-sm">No recent activity</p>
          ) : (
            recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.action === 'create'
                      ? 'bg-green-500'
                      : activity.action === 'update'
                      ? 'bg-yellow-500'
                      : activity.action === 'delete'
                      ? 'bg-red-500'
                      : activity.action === 'login'
                      ? 'bg-blue-500'
                      : 'bg-purple-500'
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.description || `${activity.action} ${activity.entity}`}</p>
                  <p className="text-xs text-gray-500">
                    {activity.userName} • {new Date(activity.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
