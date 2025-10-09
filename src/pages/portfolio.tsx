"use client";

import Navbar from "@/components/landingpage/LandingPageHeader";
import PortfolioGrid from "@/components/porfolio/PortfolioGrid";
import PortfolioHeader from "@/components/porfolio/PortfolioHeader";
import NoAuthLayout from "@/layout/NoAuthLayout";
import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";

export default function PortfolioPage() {
    const stats = [
        {
            title: "Total Invested",
            value: "$15,750",
            subtitle: "Across 8 land banks",
            icon: "N",
        },
        {
            title: "Current Value",
            value: "$17,210",
            subtitle: "+$1,460 (9.3%)",
            icon: "graph",
            highlight: true,
        },
        {
            title: "Total Shares",
            value: "127",
            subtitle: "Across 8 properties",
            icon: "share",
        },
        {
            title: "Portfolio Returns",
            value: "+9.4",
            subtitle: "Annualized returns",
            icon: "wallet",
            isPositive: true,
        },
    ];

    return (
        <NoAuthLayout title="Marektplace - Land Banking">
            <Navbar />
            <Center>
                <Container mt="100px" maxW="1200px" px={4} pb={10}>
                    <PortfolioHeader />
                    <PortfolioGrid stats={stats} />
                </Container>
            </Center>
        </NoAuthLayout>
    );
}
