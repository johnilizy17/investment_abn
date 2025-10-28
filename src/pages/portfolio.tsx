"use client";

import Navbar from "@/components/landingpage/LandingPageHeader";
import PortfolioGrid from "@/components/porfolio/PortfolioGrid";
import PortfolioHeader from "@/components/porfolio/PortfolioHeader";
import PortfolioPerformance from "@/components/porfolio/PortfolioPerformance";
import PortfolioStatus from "@/components/porfolio/PortfolioStatus";
import DashboardLayout from "@/layout/DashboardLayout";
import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";

export default function PortfolioPage() {
  
    return (
        <DashboardLayout title="Marektplace - Land Banking">
            <Navbar />
            <Center>
                <Container mt="100px" maxW="1200px" px={4} pb={10}>
                    <PortfolioHeader />
                    <PortfolioGrid />
                    <PortfolioPerformance />
                    <PortfolioStatus />
                </Container>
            </Center>
        </DashboardLayout>
    );
}
