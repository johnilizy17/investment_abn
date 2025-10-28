import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import {
    getAccessToken,
    getRefreshToken,
    getTokenExpireTime,
    saveTokens,
    clearTokens,
    STORAGE,
} from '@/utils/storage';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';
import { publicRequest, userRequest } from '@/url/api/server';

const initialState: AuthState = {
    token: getAccessToken(),
    refreshToken: getRefreshToken(),
    isLoading: false,
    user: STORAGE.get(LOCAL_STORAGE_KEYS.USER) || null,
    wallet: STORAGE.get(LOCAL_STORAGE_KEYS.WALLET) || null,
    isError: false,
    history: [],
    temporary: {}
};

// Refresh Token Function
export const refreshToken = async (): Promise<string> => {
    try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) throw new Error('Refresh token not found');

        // Check expiration
        const expireTime = getTokenExpireTime();
        if (Date.now() > expireTime) throw new Error('Refresh token expired');

        const response: AxiosResponse<{ data: RefreshTokenResponse }> =
            await userRequest.post('/auth/refresh-tokens', {
                refresh_token: refreshToken,
            });

        const newTokens = response.data.data;
        const access = {
            accessToken: newTokens.token,
            refreshToken: newTokens.refreshToken,
            expiresIn: 3000,
        }
        saveTokens(access);

        return access.accessToken;
    } catch (error: any) {
        console.error(
            'Error refreshing token:',
            error.response?.data || error.message
        );
        throw new Error('Token refresh failed');
    }
};

// Logout Thunk
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_: any, { rejectWithValue }) => {
        try {
            // await userRequest.post('/auth/logout', {});
            clearTokens();
            return true;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Logout failed');
        }
    }
);

// Register User
export const authRegister = createAsyncThunk(
    'auth/register',
    async (payload: RegisterDto, { rejectWithValue }) => {
        try {
            const response: AxiosResponse<{ data: RegisterResponse }> =
                await publicRequest.post('/auth/signup', payload);
            const userData = response.data.data;
            return userData;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Registration failed');
        }
    }
);

//wallet
export const CompleteKYC = createAsyncThunk(
    'wallet',
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await userRequest.post(
                `wallet`,
                payload
            );
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'Failed to complete KYC'
            );
        }
    }
);

export const getWallet = createAsyncThunk(
    'wallet',
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await userRequest.get(`wallet`);
            return response.data;
        } catch (error: any) {
            console.error('Error during authForgottenPassword:', error.response?.data.message);
            return rejectWithValue(
                error.response?.data.message || 'Failed to send password reset email'
            );
        }
    }
);

export const getTransactionHistory = createAsyncThunk(
    'wallet/single',
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await userRequest.get(`userAsset/single/${payload}`);
            return response.data;
        } catch (error: any) {
            console.error('Error during Transaction:', error.response?.data.message);
            return rejectWithValue(
                error.response?.data.message || 'Failed to fetch Transaction history'
            );
        }
    }
);


// Register User
export const authRegisterTeacher = createAsyncThunk(
    'auth/register',
    async (payload: RegisterDto, { rejectWithValue }) => {
        try {
            const response: AxiosResponse<{ data: RegisterResponse }> =
                await publicRequest.post('/register-teacher', payload);
            const userData = response.data.data;
            return userData;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Registration failed');
        }
    }
);

// Register User
export const authRegisterStudent = createAsyncThunk(
    'auth/register/students',
    async (payload: RegisterDto, { rejectWithValue }) => {
        try {
            const response: AxiosResponse<{ data: RegisterResponse }> =
                await userRequest.post('/register-student', payload);
            const userData = response.data.data;
            return userData;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Registration failed');
        }
    }
);

// Register User
export const authSubRegisterStudent = createAsyncThunk(
    'auth/register/Sub-students',
    async (payload: RegisterDto, { rejectWithValue }) => {
        try {
            const response: AxiosResponse<{ data: RegisterResponse }> =
                await userRequest.post(`/sub-student/${payload.parent_id}`, payload);
            const userData = response.data.data;
            return userData;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Registration failed');
        }
    }
);

// Email Verification
export const emailVerification = createAsyncThunk(
    'auth/emailVerification',
    async (token: string, { rejectWithValue }) => {
        try {
            await userRequest.get(`/auth/verify-email?token=${token}`);
            return true;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'Email verification failed'
            );
        }
    }
);
//
export const emailVerificationOTP = createAsyncThunk(
    'auth/verify-otp',
    async (payload: any, { rejectWithValue }) => {
        try {
            const result = await userRequest.post(`/auth/verify-otp`, payload);
            console.log(result, "result")
            return true;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'Email verification failed'
            );
        }
    }
);
//
export const VerifyAdminCode = createAsyncThunk(
    'auth/Admin-otp',
    async (payload: any, { rejectWithValue }) => {
        try {
            const result = await userRequest.get(`/verify-admin-code/${payload.code}`);
            return true;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data || 'Teacher Admin code failed'
            );
        }
    }
);
// Login User
export const authLogin = createAsyncThunk(
    'auth/login',
    async (data: LoginDto, { rejectWithValue }) => {
        try {
            const response: AxiosResponse<RegisterResponse> =
                await publicRequest.post('/auth/login', data);

            console.log(response, "response")
            saveTokens({
                accessToken: response.data.data.token,
                refreshToken: response.data.data.token,
                expiresIn: 300,
            });
            const info = { token: response.data.data.token, ...response.data.data.profile }
            STORAGE.set(LOCAL_STORAGE_KEYS.USER, info);

            return { data: info };
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
);


export const authForgottenPassword = createAsyncThunk(
    'auth/verify-otp',
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await publicRequest.post(
                `auth/verify-otp`,
                payload
            );
            saveTokens({
                accessToken: response.data.data.token,
                refreshToken: response.data.data.refreshToken,
                expiresIn: response.data.data.expires,
            });
            return response.data;
        } catch (error: any) {
            console.error('Error during authForgottenPassword:', error.response?.data.message);
            return rejectWithValue(
                error.response?.data.message || 'Failed to send password reset email'
            );
        }
    }
);

export const authVerifyPhone = createAsyncThunk(
    'auth/verifyPhone',
    async (payload: PhoneDto, { rejectWithValue }) => {
        try {
            const { data } = await userRequest.post(`auth/send-otp`, payload);
            return data;
        } catch (error: any) {
            console.error('Error during authVerifyPhone:', error);
            return rejectWithValue(
                error.response?.data || 'Failed to send phone verification OTP'
            );
        }
    }
);


export const authChangePage = createAsyncThunk(
    'auth/change-password',
    async (payload: changePasswordDto, { rejectWithValue }) => {
        try {
            const response = await userRequest.post(
                `auth/change-password`,
                payload
            );
            return true;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data.message || 'Failed to send password reset email'
            );
        }
    }
);


export const authVerifyEmail = createAsyncThunk(
    'auth/verifyEmail',
    async (payload: EmailDto, { rejectWithValue }) => {
        try {
            const data = await userRequest.post(
                `auth/forgot-password`,
                payload
            );
            return data;
        } catch (error: any) {
            console.error('Error during authVerifyEmail:', error);
            return rejectWithValue(
                error.response?.data || 'Failed to send email verification'
            );
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (
            state,
            action
        ) => {
            state.user = action.payload;
        },
        setTemporaryStorage: (
            state,
            action
        ) => {
            state.temporary = action.payload;
        },
        logout: (state) => {
            window.location.href = '/auth/login';
            state.token = null;
            state.refreshToken = null;
            state.user = {};
            clearTokens();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.token = null;
                state.refreshToken = null;
                state.user = {};
                state.isLoading = false;
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(authRegister.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authRegister.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(authRegister.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(authLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.token = action.payload.data.token;
                state.refreshToken = action.payload.data.token;
                state.user = action.payload.data;
                state.isLoading = false;
            })

            .addCase(getWallet.fulfilled, (state, action) => {
                if (action.payload.data) {
                    STORAGE.set(LOCAL_STORAGE_KEYS.WALLET, action.payload.data);

                    state.wallet = action.payload.data
                }else{
                   STORAGE.set(LOCAL_STORAGE_KEYS.WALLET, { withdrawal_balance: 0, investment_balance: 0 });
 state.wallet = { withdrawal_balance: 0, investment_balance: 0 }
                };
            })

            .addCase(getTransactionHistory.fulfilled, (state, action) => {
                state.history = action.payload.data;
            })
            .addCase(authLogin.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    },
});

interface AuthState {
    token: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    user: any;
    isError: boolean;
    temporary: any,
    wallet: { withdrawal_balance: 0, investment_balance: 0 },
    history: any[],
}

interface RefreshTokenResponse {
    token: string,
    expires: string,
    refreshToken: string;
}
interface RegisterDto {
    firstName: string;
    lastName: string;
    email: string;
    parent_id: string;
    password: string;
}

interface RegisterResponse {
    data: {
        profile: {
            user_id: string,
            first_name: string,
            last_name: string,
            email_address: string,
            phone_number: string,
            email_verified: number,
            role_id: string,
        },
        token: string,
        expires: string,
        refreshToken: string
    };
}

interface LoginDto {
    email: string;
    password: string;
}

interface EmailDto {
    email: string;
}
interface PhoneDto {
    phone_number: string;
}
interface changePasswordDto {
    password: string;
    confirm_password: string;
}

export const { setAuth, logout, setTemporaryStorage } = authSlice.actions;
export default authSlice.reducer;
