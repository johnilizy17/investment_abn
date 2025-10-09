import axios from "axios";
import { userRequest } from "../api/server";

export const createQuiz = async (payload: any) => {
        const { data } = await userRequest.post("/quizzes", payload);
        return data;
};

export async function getGoogleUser(access_token: string) {
        try {
                const response = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                        headers: {
                                Authorization: `Bearer ${access_token}`,
                        },
                });

                return response.data; // contains user details
        } catch (error) {
                console.error("Error fetching Google user:", error);
                throw error;
        }
}