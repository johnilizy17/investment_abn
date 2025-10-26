import { userRequest } from "../api/server";

export const createAsset = async (payload: any) => {
    const { data } = await userRequest.post(`userAsset`, payload);
    return data;
};