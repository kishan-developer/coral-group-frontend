import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../store/slices/authSlice';
import projectReducer, { ProjectState } from '../store/slices/projectSlice';
import verticalReducer, { VerticalState } from '../store/slices/verticalSlice';
import queryReducer, { QueryState } from '../store/slices/querySlice';
import userReducer, { UserState } from '../store/slices/userSlice';
import dashboardReducer, { DashboardState } from '../store/slices/dashboardSlice';

export interface RootState {
  auth: AuthState;
  projects: ProjectState;
  verticals: VerticalState;
  queries: QueryState;
  users: UserState;
  dashboard: DashboardState;
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    verticals: verticalReducer,
    queries: queryReducer,
    users: userReducer,
    dashboard: dashboardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
