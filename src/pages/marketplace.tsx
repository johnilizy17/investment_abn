"use client";

import Navbar from "@/components/landingpage/LandingPageHeader";
import HeroSection from "@/components/marketPlace/HeroSection";
import LandCard from "@/components/marketPlace/LandCard";
import SearchFilter from "@/components/marketPlace/SeachFilter";
import NoAuthLayout from "@/layout/NoAuthLayout";
import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function MarketplacePage() {

    const { investment } = useSelector((a: { asset: { investment: any } }) => a.asset)

    const landBanks = [
        {
            title: "Fort Worth Industrial Park",
            location: "Lagos, Nigeria",
            description:
                "Tech corridor development with university partnerships and startup ecosystem growth",
            sharesPrice: "₦500",
            minInvestment: "₦500",
            yield: "11.2%",
            sharesAvailable: "75/200",
            status: "Active",
        },
    ];

    useEffect(() => {
        console.log(investment, "investment, sdhsjdhsj")
    }, [])

    return (
        <NoAuthLayout title="Marektplace - Land Banking">
            <Navbar />
            <Center>
                <Container maxW="1200px" px={4} py={10}>
                    <HeroSection />
                    <SearchFilter />
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8} mt={8}>
                        {investment.data.map((item:any, idx:number) => (
                            <LandCard key={idx} {...item} />
                        ))}
                    </SimpleGrid>
                </Container>
            </Center>
        </NoAuthLayout>
    );
}
