import { userRequest } from "../api/server";

export const verifyQuizCode = async (id: any) => {
    const { data } = await userRequest.get(`/verify-quizzes/${id}`);
    return data;
};

export const completeQuizCode = async (payload: any) => {
    const { data } = await userRequest.post(`/join-quizzes`, payload);
    return data;
};

export const createQuestion = async (payload: any) => {
    const { data } = await userRequest.post(`/create-question`, payload);
    return data;
};

export const completeGroupCode = async (payload: any) => {
    const { data } = await userRequest.post(`/join-group`, payload);
    return data;
};

export const verifyQroupCode = async (id: any) => {
    const { data } = await userRequest.get(`/groups/${id}`);
    return data;
};