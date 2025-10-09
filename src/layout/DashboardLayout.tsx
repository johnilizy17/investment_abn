import DashboardHeader from '@/component/landingpage/DasboardHeader';
import Head from 'next/head';
import React from 'react';
import { AiChat } from './AiChat';

export default function DashboardLayout({ title, children, chat=false }: { title: string, children: any, chat?:boolean }) {
    return (
        <>
            <Head>
                <title>TechXplore - {title}</title>
                <meta name="description" content="Quest Earn Get Start" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DashboardHeader />

         {!chat &&   <AiChat />}
            {children}
        </>
    )
}