import { userRequest } from "../api/server";

export const verifyWallet = async (payload: any) => {
    const { data } = await userRequest.post(`wallet/verify`, payload);
    return data;
};
export const withdrawWallet = async (payload: any) => {
    const { data } = await userRequest.post(`wallet/verify`, payload);
    return data;
};
