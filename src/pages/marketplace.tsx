"use client";

import Navbar from "@/components/landingpage/LandingPageHeader";
import HeroSection from "@/components/marketPlace/HeroSection";
import LandCard from "@/components/marketPlace/LandCard";
import SearchFilter from "@/components/marketPlace/SeachFilter";
import NoAuthLayout from "@/layout/NoAuthLayout";
import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";


export default function MarketplacePage() {
    const landBanks = [
        {
            title: "Fort Worth Industrial Park",
            location: "Lagos, Nigeria",
            description:
                "Tech corridor development with university partnerships and startup ecosystem growth",
            sharesPrice: "$500",
            minInvestment: "$500",
            yield: "11.2%",
            sharesAvailable: "75/200",
            status: "Active",
        },
    ];

    return (
        <NoAuthLayout title="Marektplace - Land Banking">
            <Navbar />
            <Center>
                <Container maxW="1200px" px={4} py={10}>
                    <HeroSection />
                    <SearchFilter />
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8} mt={8}>
                        {Array(4)
                            .fill(landBanks[0])
                            .map((item, idx) => (
                                <LandCard key={idx} {...item} />
                            ))}
                    </SimpleGrid>
                </Container>
            </Center>
        </NoAuthLayout>
    );
}
