import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import {
    saveTokens,
    clearTokens,
    STORAGE,
    getAccessQuestion,
} from '@/utils/storage';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';
import { publicRequest, userRequest } from '@/url/api/server';

const initialState: SyllabusState = {
    questions: getAccessQuestion() || [],
    syllabus: []
};

// Refresh Token Function
// Logout Thunk
export const getQuestion = createAsyncThunk(
    'auth/question',
    async (_: any, { rejectWithValue }) => {
        try {
            const data = await userRequest.get(`/get-questions/${_}`);
            return data.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Question failed');
        }
    }
);

export const getSyllabus = createAsyncThunk(
    'syllabus',
    async (_: string, { rejectWithValue }) => {
        try {
            const data = await userRequest.get(`/syllabus`);
            return data.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Question failed');
        }
    }
);

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setAnswer: (
            state,
            action
        ) => {
            state.questions = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getQuestion.fulfilled, (state, action: any) => {
            state.questions = action.payload.data;
            STORAGE.set(LOCAL_STORAGE_KEYS.GET_QUESTION, action.payload.data);
        })
        builder.addCase(getSyllabus.fulfilled, (state, action: any) => {
            state.syllabus = action.payload.data;
        })
    },
});

interface SyllabusState {
    questions: any;
    syllabus: any
}
export const { setAnswer } = questionSlice.actions;
export default questionSlice.reducer;
