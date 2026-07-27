"use client";

import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Users,
  DollarSign,
  FileText,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000/api/v1';

interface AnalyticsData {
  leads: {
    total: number;
    new: number;
    inProgress: number;
    closed: number;
    lost: number;
    monthlyData: { month: string; count: number }[];
  };
  revenue: {
    total: string;
    monthly: { month: string; amount: string }[];
    growth: string;
  };
  brochures: {
    totalRequests: number;
    downloaded: number;
    conversionRate: string;
    popularBrochures: { name: string; downloads: number }[];
  };
  users: {
    total: number;
    active: number;
    newRegistrations: number;
    monthlyGrowth: { month: string; count: number }[];
  };
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  useEffect(() => {
    fetchAnalyticsData();
  }, [timeRange]);

  const fetchAnalyticsData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/analytics?range=${timeRange}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-400 mt-2">Detailed insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-2">
          {(['7d', '30d', '90d', '1y'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeRange === range
                  ? 'bg-[#94cb3d] text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : range === '90d' ? '90 Days' : '1 Year'}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Leads"
          value={data?.leads.total || 0}
          change="+12.5%"
          trend="up"
          icon={Users}
          color="bg-blue-500/20 text-blue-400"
        />
        <MetricCard
          title="Revenue"
          value={data?.revenue.total || '₹0'}
          change={data?.revenue.growth || '+0%'}
          trend="up"
          icon={DollarSign}
          color="bg-green-500/20 text-green-400"
        />
        <MetricCard
          title="Brochure Downloads"
          value={data?.brochures.downloaded || 0}
          change="+18.2%"
          trend="up"
          icon={Download}
          color="bg-cyan-500/20 text-cyan-400"
        />
        <MetricCard
          title="Active Users"
          value={data?.users.active || 0}
          change="+5"
          trend="up"
          icon={Activity}
          color="bg-purple-500/20 text-purple-400"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Trends */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Lead Trends</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {data?.leads.monthlyData.map((item, index) => {
              const maxCount = Math.max(...data.leads.monthlyData.map(d => d.count));
              const widthPercent = maxCount > 0 ? Math.min((item.count / maxCount) * 100, 100) : 0;
              
              return (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-20 text-sm text-gray-400">{item.month}</span>
                  <div className="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-[#94cb3d] transition-all duration-500 flex items-center justify-end pr-2"
                      style={{ width: `${widthPercent}%` }}
                    >
                      <span className="text-xs font-bold text-black">{item.count}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Revenue Trends</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {data?.revenue.monthly.map((item, index) => {
              const amountValue = parseFloat(item.amount.replace(/[^0-9.]/g, ''));
              const maxAmount = Math.max(...data.revenue.monthly.map(d => parseFloat(d.amount.replace(/[^0-9.]/g, ''))));
              const widthPercent = maxAmount > 0 ? Math.min((amountValue / maxAmount) * 100, 100) : 0;
              
              return (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-20 text-sm text-gray-400">{item.month}</span>
                  <div className="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-500 flex items-center justify-end pr-2"
                      style={{ width: `${widthPercent}%` }}
                    >
                      <span className="text-xs font-bold text-black">{item.amount}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lead Funnel Breakdown */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Lead Funnel Breakdown</h3>
          <PieChart className="w-5 h-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FunnelStage
            stage="New Leads"
            count={data?.leads.new || 0}
            percentage={data?.leads.total ? ((data.leads.new / data.leads.total) * 100).toFixed(1) : '0'}
            color="bg-blue-500"
          />
          <FunnelStage
            stage="In Progress"
            count={data?.leads.inProgress || 0}
            percentage={data?.leads.total ? ((data.leads.inProgress / data.leads.total) * 100).toFixed(1) : '0'}
            color="bg-yellow-500"
          />
          <FunnelStage
            stage="Closed"
            count={data?.leads.closed || 0}
            percentage={data?.leads.total ? ((data.leads.closed / data.leads.total) * 100).toFixed(1) : '0'}
            color="bg-green-500"
          />
          <FunnelStage
            stage="Lost"
            count={data?.leads.lost || 0}
            percentage={data?.leads.total ? ((data.leads.lost / data.leads.total) * 100).toFixed(1) : '0'}
            color="bg-red-500"
          />
        </div>
      </div>

      {/* Brochure Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Brochure Performance</h3>
            <FileText className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-[#94cb3d]">
                  {data?.brochures.totalRequests || 0}
                </p>
                <p className="text-sm text-gray-400 mt-1">Total Requests</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-cyan-400">
                  {data?.brochures.downloaded || 0}
                </p>
                <p className="text-sm text-gray-400 mt-1">Downloaded</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Conversion Rate</span>
                <span className="text-2xl font-bold text-[#94cb3d]">
                  {data?.brochures.conversionRate || '0%'}
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#94cb3d] transition-all duration-500"
                  style={{
                    width: data?.brochures.conversionRate
                      ? parseFloat(data.brochures.conversionRate)
                      : 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Popular Brochures */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Popular Brochures</h3>
            <Download className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {data?.brochures.popularBrochures.map((brochure, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#94cb3d]/20 flex items-center justify-center text-[#94cb3d] font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-medium">{brochure.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">{brochure.downloads}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Growth */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">User Growth</h3>
          <Users className="w-5 h-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-[#94cb3d]">{data?.users.total || 0}</p>
            <p className="text-sm text-gray-400 mt-1">Total Users</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-purple-400">{data?.users.active || 0}</p>
            <p className="text-sm text-gray-400 mt-1">Active Users</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-cyan-400">{data?.users.newRegistrations || 0}</p>
            <p className="text-sm text-gray-400 mt-1">New This Period</p>
          </div>
        </div>
        <div className="space-y-3">
          {data?.users.monthlyGrowth.map((item, index) => {
            const maxCount = Math.max(...data.users.monthlyGrowth.map(d => d.count));
            const widthPercent = maxCount > 0 ? Math.min((item.count / maxCount) * 100, 100) : 0;
            
            return (
              <div key={index} className="flex items-center gap-4">
                <span className="w-20 text-sm text-gray-400">{item.month}</span>
                <div className="flex-1 h-6 bg-white/5 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-purple-500 transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${widthPercent}%` }}
                  >
                    <span className="text-xs font-bold text-black">{item.count}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
}: {
  title: string;
  value: number | string;
  change: string;
  trend: 'up' | 'down';
  icon: any;
  color: string;
}) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10 hover:border-[#94cb3d]/50 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <div className="flex items-center gap-1 mt-2">
            {trend === 'up' ? (
              <ArrowUpRight className="w-4 h-4 text-[#94cb3d]" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-red-400" />
            )}
            <span className={`text-sm ${trend === 'up' ? 'text-[#94cb3d]' : 'text-red-400'}`}>
              {change}
            </span>
            <span className="text-gray-500 text-sm">from last period</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

function FunnelStage({
  stage,
  count,
  percentage,
  color,
}: {
  stage: string;
  count: number;
  percentage: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <div className={`h-32 ${color} rounded-lg flex items-center justify-center mb-3`}>
        <div>
          <p className="text-3xl font-bold text-white">{count}</p>
          <p className="text-sm text-white/80">{percentage}%</p>
        </div>
      </div>
      <p className="text-sm font-medium text-gray-400">{stage}</p>
    </div>
  );
}
