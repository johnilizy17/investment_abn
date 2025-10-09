import axios from "axios";
import { KEYS } from "./constants";

const API_BASE = KEYS.termii_api;

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


export async function sendSMS(to: string) {
    try {
        const code = generateOTP();
        const res = await axios.post(`/api/sms`, {
            to,
            code
        });
        return code;
    } catch (err: any) {
        console.error("SMS Error:", err.response?.data || err.message);
        throw err;
    }
}

export async function sendEmailOTP(email: string) {
    try {
        const code = generateOTP();

        const res = await axios.post(`/api/email`, {
            email,
            code
        });

        return code;
    } catch (err: any) {
        console.error("Email Error:", err.response?.data || err.message);
        throw err;
    }
}
