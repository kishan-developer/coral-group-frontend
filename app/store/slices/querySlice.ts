import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../lib/axios';
import { Query } from '../../types';

export interface QueryState {
  queries: Query[];
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: QueryState = {
  queries: [],
  loading: false,
  error: null,
  success: false,
}

export const fetchQueries = createAsyncThunk(
  'queries/fetchAll',
  async (params: any = {}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/queries', { params });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch queries');
    }
  }
);

export const submitQuery = createAsyncThunk(
  'queries/submit',
  async (queryData: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/queries', queryData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Submission failed');
    }
  }
);

const querySlice = createSlice({
  name: 'queries',
  initialState,
  reducers: {
    resetQueryStatus: (state) => {
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQueries.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.queries = action.payload.data;
      })
      .addCase(fetchQueries.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(submitQuery.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitQuery.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitQuery.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetQueryStatus } = querySlice.actions;
export default querySlice.reducer;
