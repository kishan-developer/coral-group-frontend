"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  FileText,
  Download,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Bell,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Maximize,
  Minimize
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const navigation = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Queries', href: '/admin/queries', icon: FileText },
    { name: 'Brochures', href: '/admin/brochures', icon: Download },
    { name: 'Blog Posts', href: '/admin/blog-posts', icon: PenTool },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Analytics', href: '/admin/analytics', icon: TrendingUp },
    { name: 'Notifications', href: '/admin/notifications', icon: Bell },
  ];

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-[#1a1a1a] border-r border-white/10 transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-[#94cb3d]">Coral Group</h1>
                <p className="text-xs text-gray-500">Admin Dashboard</p>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:block text-gray-400 hover:text-white ml-auto"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 relative">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-[#94cb3d] text-black font-semibold'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    } ${sidebarCollapsed ? 'justify-center' : ''}`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!sidebarCollapsed && <span>{item.name}</span>}
                  </Link>
                  {/* Tooltip */}
                  {sidebarCollapsed && hoveredItem === item.name && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-[#1a1a1a] border border-white/10 rounded-lg text-sm font-medium whitespace-nowrap z-50 shadow-lg">
                      {item.name}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-white/10">
            <div className={`flex items-center gap-3 p-3 rounded-lg bg-white/5 ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-[#94cb3d] flex items-center justify-center text-black font-bold flex-shrink-0">
                {user?.firstName?.[0] || 'A'}
              </div>
              {!sidebarCollapsed && (
                <div className="flex-1">
                  <p className="text-sm font-semibold">{user?.firstName} {user?.lastName}</p>
                  <p className="text-xs text-gray-500">{user?.role || 'Admin'}</p>
                </div>
              )}
              {!sidebarCollapsed && (
                <button onClick={handleLogout} className="text-gray-400 hover:text-white">
                  <LogOut className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'}`}>
        {/* Top header */}
        <header className="sticky top-0 z-30 bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-end px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4">
              <button 
                onClick={toggleFullscreen}
                className="relative p-2 text-gray-400 hover:text-white"
              >
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => router.push('/admin/notifications')}
                className="relative p-2 text-gray-400 hover:text-white"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#94cb3d] rounded-full" />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-4 px-6">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>© {new Date().getFullYear()} Coral Group. All rights reserved.</span>
            <a 
              href="https://www.linkedin.com/in/kishan-kumar-ray-372972234/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Developed by Kishan (Full Stack Developer)
            </a>
          </div>
        </footer>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
