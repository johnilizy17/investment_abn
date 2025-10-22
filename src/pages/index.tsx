import HomeBanner from "@/components/landingpage/Banner";
import BannerChoose from "@/components/landingpage/BannerChoose";
import LandBanking from "@/components/landingpage/LandBank";
import Navbar from "@/components/landingpage/LandingPageHeader";
import SmartLandInvestment from "@/components/landingpage/SmartLandInvestment";
import NoAuthLayout from "@/layout/NoAuthLayout";
import React from "react";

export default function Home() {
    return (
        <NoAuthLayout title="Home page">
            <Navbar />
            <HomeBanner />
            <LandBanking />
            <BannerChoose />
            <SmartLandInvestment />
        </NoAuthLayout>
    )
}