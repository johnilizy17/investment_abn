"use client";

import Navbar from "@/components/landingpage/LandingPageHeader";
import HeroSection from "@/components/dashboard/HeroSection";
import LandCard from "@/components/marketPlace/LandCard";
import SearchFilter from "@/components/marketPlace/SeachFilter";
import NoAuthLayout from "@/layout/NoAuthLayout";
import { Box, Center, Container, SimpleGrid, Tabs } from "@chakra-ui/react";
import DashboardLayout from "@/layout/DashboardLayout";
import PortfolioGrid from "@/components/porfolio/PortfolioGrid";
import PortfolioStatus from "@/components/porfolio/PortfolioStatus";
import { KYCAlertModel } from "@/template/model/KYCAlertModel";
import { useSelector } from "react-redux";
import Transaction from "@/components/porfolio/Transaction";


export default function MarketplacePage() {

    const { investment } = useSelector((a: { asset: { investment: any } }) => a.asset)

    return (
        <DashboardLayout title="Dashboard - Land Banking">
            <Navbar />
            <KYCAlertModel />
            <Center>
                <Container maxW="1200px" px={4} py={10}>
                    <HeroSection />
                    <PortfolioGrid />
                    <Tabs.Root mt={10} variant="enclosed" fitted defaultValue={"holding"}>
                        <Tabs.List bg={"#0049AF1A"} maxW="md">
                            <Tabs.Trigger value="holding">Holdings</Tabs.Trigger>
                            <Tabs.Trigger value="activities">Transaction</Tabs.Trigger>
                            <Tabs.Trigger value="opportunity">New Opportunity</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content w="full" value="holding">
                            <Box w="full">
                                <PortfolioStatus />
                            </Box>
                        </Tabs.Content>
                        <Tabs.Content value="activities"><Transaction /></Tabs.Content>
                        <Tabs.Content value="opportunity">
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8} mt={8}>
                                {investment.data.map((item: any, idx: number) => (
                                    <LandCard key={idx} {...item} />
                                ))}
                            </SimpleGrid>
                        </Tabs.Content> 
                    </Tabs.Root>

                </Container>
            </Center>
        </DashboardLayout>
    );
}
