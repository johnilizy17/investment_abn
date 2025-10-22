import Head from 'next/head';
import React, { useEffect } from 'react';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { getAssetAll } from '@/url/redux/slices/assetSlice';

export default function NoAuthLayout({ children, title }: { children: any, title: string }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAssetAll({ page: 1, status: 1, title: "" }) as any)
    }, [])
    return (
        <>
            <Head>
                <title>AB Narinohs - {title}</title>
                <meta name="description" content="Quest Earn Get Start" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
            <Footer />
        </>
    )
}