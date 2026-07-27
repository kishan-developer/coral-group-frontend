const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000/api/v1';

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }

    return data;
};

// Auth API
export const authApi = {
    login: (credentials: any) => apiClient('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
    }),
    register: (userData: any) => apiClient('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
    }),
    logout: () => apiClient('/auth/logout'),
    getMe: () => apiClient('/auth/me'),
};

// Vertical API
export const verticalApi = {
    getAll: () => apiClient('/verticals'),
    getBySlug: (slug: string) => apiClient(`/verticals/${slug}`),
};

// Project API
export const projectApi = {
    getAll: (params?: any) => {
        const query = params ? `?${new URLSearchParams(params)}` : '';
        return apiClient(`/projects${query}`);
    },
    getBySlug: (slug: string) => apiClient(`/projects/${slug}`),
};

// Query/Lead API
export const queryApi = {
    submit: (queryData: any) => apiClient('/queries', {
        method: 'POST',
        body: JSON.stringify(queryData),
    }),
    getAll: (params?: any) => {
        const query = params ? `?${new URLSearchParams(params)}` : '';
        return apiClient(`/queries${query}`);
    },
    getById: (id: string) => apiClient(`/queries/${id}`),
    update: (id: string, data: any) => apiClient(`/queries/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
    }),
    delete: (id: string) => apiClient(`/queries/${id}`, {
        method: 'DELETE',
    }),
    bulkUpdate: (data: any) => apiClient('/queries/bulk-update', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    assign: (id: string, data: any) => apiClient(`/queries/${id}/assign`, {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    getStats: () => apiClient('/queries/stats'),
};

// User Management API
export const userApi = {
    getAll: (params?: any) => {
        const query = params ? `?${new URLSearchParams(params)}` : '';
        return apiClient(`/users${query}`);
    },
    getById: (id: string) => apiClient(`/users/${id}`),
    create: (userData: any) => apiClient('/users', {
        method: 'POST',
        body: JSON.stringify(userData),
    }),
    update: (id: string, userData: any) => apiClient(`/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
    }),
    delete: (id: string) => apiClient(`/users/${id}`, {
        method: 'DELETE',
    }),
    updateStatus: (id: string, status: any) => apiClient(`/users/${id}/status`, {
        method: 'PUT',
        body: JSON.stringify(status),
    }),
    invite: (data: any) => apiClient('/users/invite', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    updateTargets: (id: string, targets: any) => apiClient(`/users/${id}/targets`, {
        method: 'PUT',
        body: JSON.stringify(targets),
    }),
};

// Dashboard API
export const dashboardApi = {
    getStats: () => apiClient('/dashboard/stats'),
    getRecentActivity: (params?: any) => {
        const query = params ? `?${new URLSearchParams(params)}` : '';
        return apiClient(`/dashboard/recent-activity${query}`);
    },
    getRevenueChart: (params?: any) => {
        const query = params ? `?${new URLSearchParams(params)}` : '';
        return apiClient(`/dashboard/revenue-chart${query}`);
    },
    getGoalProgress: () => apiClient('/dashboard/goal-progress'),
    getTodayLeads: () => apiClient('/dashboard/today-leads'),
    getPendingFollowups: () => apiClient('/dashboard/pending-followups'),
    getActivityLogs: (params?: any) => {
        const query = params ? `?${new URLSearchParams(params)}` : '';
        return apiClient(`/dashboard/activity-logs${query}`);
    },
    getLeadFunnel: () => apiClient('/dashboard/lead-funnel'),
    getLeadSources: () => apiClient('/dashboard/lead-sources'),
};
