import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../lib/axios';
import { Vertical } from '../../types';

export interface VerticalState {
  verticals: Vertical[];
  loading: boolean;
  error: string | null;
}

const initialState: VerticalState = {
  verticals: [],
  loading: false,
  error: null,
};

export const fetchVerticals = createAsyncThunk(
  'verticals/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/verticals');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch verticals');
    }
  }
);

const verticalSlice = createSlice({
  name: 'verticals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVerticals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVerticals.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.verticals = action.payload.data;
      })
      .addCase(fetchVerticals.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default verticalSlice.reducer;
