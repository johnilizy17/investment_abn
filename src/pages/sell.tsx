"use client";

import Navbar from "@/components/landingpage/LandingPageHeader";
import HeroSection from "@/components/sell/HeroSection";
import LandCard from "@/components/sell/LandCard";
import SearchFilter from "@/components/sell/SeachFilter";
import NoAuthLayout from "@/layout/NoAuthLayout";
import { EmptyState } from "@/utils/EmptyState";
import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "@/layout/DashboardLayout";

export default function Sells() {

    const { investment } = useSelector((a: { asset: { investment: any } }) => a.asset)

    return (
        <DashboardLayout title="Investment on sells - Land Banking">
            <Navbar />
            <Center>
                <Container maxW="1200px" px={4} py={10}>
                    <HeroSection />
                    <SearchFilter />
                    <SimpleGrid columns={investment && investment.data.length > 0.1 ? { base: 1, md: 2, lg: 2 } : 1} gap={8} mt={8}>
                        {investment && investment.data.length > 0.1 ?
                            investment.data.map((item: any, idx: number) => (
                                <LandCard key={idx} {...item} />
                            ))
                            :
                            <EmptyState title="no properties" />}
                    </SimpleGrid>
                </Container>
            </Center>
        </DashboardLayout>
    );
}
