import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../lib/axios';

export interface DashboardStats {
  totalLeads: number;
  newLeads: number;
  inProgressLeads: number;
  closedLeads: number;
  lostLeads: number;
  totalProjects: number;
  activeProjects: number;
  totalRevenue: string;
  revenueGrowth: string;
  conversionRate: string;
  totalUsers: number;
  activeUsers: number;
}

export interface ActivityLog {
  _id: string;
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  userName: string;
  action: string;
  entity: string;
  entityId?: string;
  description: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}

export interface RevenueData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}

export interface GoalProgress {
  goal: string;
  current: number;
  target: number;
  progress: number;
}

export interface LeadFunnel {
  stage: string;
  count: number;
}

export interface LeadSource {
  source: string;
  count: number;
  percentage: string;
}

export interface DashboardState {
  stats: DashboardStats | null;
  recentActivity: ActivityLog[];
  revenueChart: RevenueData | null;
  goalProgress: GoalProgress[];
  todayLeads: any[];
  pendingFollowups: any[];
  activityLogs: ActivityLog[];
  leadFunnel: LeadFunnel[];
  leadSources: LeadSource[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  stats: null,
  recentActivity: [],
  revenueChart: null,
  goalProgress: [],
  todayLeads: [],
  pendingFollowups: [],
  activityLogs: [],
  leadFunnel: [],
  leadSources: [],
  loading: false,
  error: null,
};

export const fetchDashboardStats = createAsyncThunk(
  'dashboard/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/stats');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch dashboard stats');
    }
  }
);

export const fetchRecentActivity = createAsyncThunk(
  'dashboard/fetchRecentActivity',
  async (params: any = {}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/recent-activity', { params });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch recent activity');
    }
  }
);

export const fetchRevenueChart = createAsyncThunk(
  'dashboard/fetchRevenueChart',
  async (params: any = {}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/revenue-chart', { params });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch revenue chart');
    }
  }
);

export const fetchGoalProgress = createAsyncThunk(
  'dashboard/fetchGoalProgress',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/goal-progress');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch goal progress');
    }
  }
);

export const fetchTodayLeads = createAsyncThunk(
  'dashboard/fetchTodayLeads',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/today-leads');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch today leads');
    }
  }
);

export const fetchPendingFollowups = createAsyncThunk(
  'dashboard/fetchPendingFollowups',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/pending-followups');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch pending followups');
    }
  }
);

export const fetchActivityLogs = createAsyncThunk(
  'dashboard/fetchActivityLogs',
  async (params: any = {}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/activity-logs', { params });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch activity logs');
    }
  }
);

export const fetchLeadFunnel = createAsyncThunk(
  'dashboard/fetchLeadFunnel',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/lead-funnel');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch lead funnel');
    }
  }
);

export const fetchLeadSources = createAsyncThunk(
  'dashboard/fetchLeadSources',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dashboard/lead-sources');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch lead sources');
    }
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Dashboard Stats
      .addCase(fetchDashboardStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.stats = action.payload.data;
      })
      .addCase(fetchDashboardStats.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Recent Activity
      .addCase(fetchRecentActivity.fulfilled, (state, action: PayloadAction<any>) => {
        state.recentActivity = action.payload.data;
      })
      // Revenue Chart
      .addCase(fetchRevenueChart.fulfilled, (state, action: PayloadAction<any>) => {
        state.revenueChart = action.payload.data;
      })
      // Goal Progress
      .addCase(fetchGoalProgress.fulfilled, (state, action: PayloadAction<any>) => {
        state.goalProgress = action.payload.data;
      })
      // Today Leads
      .addCase(fetchTodayLeads.fulfilled, (state, action: PayloadAction<any>) => {
        state.todayLeads = action.payload.data;
      })
      // Pending Followups
      .addCase(fetchPendingFollowups.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingFollowups = action.payload.data;
      })
      // Activity Logs
      .addCase(fetchActivityLogs.fulfilled, (state, action: PayloadAction<any>) => {
        state.activityLogs = action.payload.data;
      })
      // Lead Funnel
      .addCase(fetchLeadFunnel.fulfilled, (state, action: PayloadAction<any>) => {
        state.leadFunnel = action.payload.data.stages;
      })
      // Lead Sources
      .addCase(fetchLeadSources.fulfilled, (state, action: PayloadAction<any>) => {
        state.leadSources = action.payload.data;
      });
  },
});

export const { clearError } = dashboardSlice.actions;
export default dashboardSlice.reducer;
