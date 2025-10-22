import AuthLayout from '@/layout/AuthLayout';
import ForgotPassword from '@/template/auth/forgot-password/ForgotPassword';
import React from 'react';


export default function Forgotten() {
    return (
        <>
            <AuthLayout seoTitle="Forgot Password">
                <ForgotPassword />
            </AuthLayout>
        </>
    )
}