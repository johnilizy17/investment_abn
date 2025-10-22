import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { userRequest, userFileUpload } from '@/url/api/server';
import { AxiosResponse } from 'axios';
import { STORAGE } from '@/utils/storage';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

const initialState: assetState = {
  investment: { pagination: {}, data: [] },
  asset: STORAGE.get(LOCAL_STORAGE_KEYS.SUB) || [],
  temporary: {}
};

export const getAsset = createAsyncThunk(
  'asset',
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await userRequest.get(`/asset?page=${payload.page}&type=${payload.type}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Password change failed');
    }
  }
)

export const getAssetSingle = createAsyncThunk(
  'asset',
  async (_: any, { rejectWithValue }) => {
    try {
      const response = await userRequest.get(`/investment/id?id=${_}`);
       return response.data.data[0];
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Password change failed');
    }
  }
)

export const getUserAsset = createAsyncThunk(
  'asset/userAsset',
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await userRequest.get(`/userAsset?page=${payload.page}&type=${payload.type}`);
      return response.data.data.asset;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'failed');
    }
  }
)


export const getAssetAll = createAsyncThunk(
  'asset/all',
  async (payload: any, { rejectWithValue }) => {
    try {
      const investment = await userRequest.get(`/investment/stats?page=${payload.page}&title=${payload.title}&status=2`);
      return {
        investment: investment.data.data,
      };
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Password change failed');
    }
  }
)
export const createInvestment = createAsyncThunk(
  'cart/invest',
  async (payload: any, { rejectWithValue }) => {
    try {
      const result = await userRequest.post("/order/invest", payload)
      if (payload.paymentType === 2) {
        return { asset: result.data.data.asset, order: result.data.data.order, account: result.data.data.account }
      } else {
        return { asset: result.data.data.asset, order: result.data.data.order, account: {} }
      }
    } catch (error: any) {
      console.log(error)
      return rejectWithValue(error.response?.data.message || 'inspection fee failed');
    }
  }
)

export const getOrders = createAsyncThunk(
  'cart/get/orders',
  async (payload: any, { rejectWithValue }) => {
    try {
      const result = await userRequest.get("/order")

      return { data: result.data.data, account: {} }

    } catch (error: any) {
      console.log(error)
      return rejectWithValue(error.response?.data.message || 'inspection fee failed');
    }
  }
)

const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    setInvestment: (
      state,
      action
    ) => {
      state.investment = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAsset.fulfilled, (state, action) => {
      state.asset = action.payload;
    })
      .addCase(getAssetAll.fulfilled, (state, action) => {
        state.investment = action.payload.investment;
      })
      .addCase(getAssetSingle.fulfilled, (state, action) => {
        state.temporary = action.payload;
      })
      .addCase(createInvestment.fulfilled, (state, action) => {
        state.asset = action.payload.asset
      })
  },
});

interface assetState {
  investment: any;
  asset: any;
  temporary: any
};

export const { setInvestment } = assetSlice.actions
export default assetSlice.reducer;
