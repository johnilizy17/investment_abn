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
import { motion } from "framer-motion";

const MotionSimpleGrid = motion(SimpleGrid as any);
const MotionBox = motion(Box as any);

export default function Sells() {

    const { investment } = useSelector((a: { asset: { investment: any } }) => a.asset)

    return (
        <DashboardLayout title="Investment on sells - Land Banking">
            <Navbar />
            <Center>
                <Container maxW="1200px" px={4} py={10}>
                    <HeroSection />
                    <SearchFilter />
                    <MotionSimpleGrid
                        columns={investment && investment.data.length > 0.1 ? { base: 1, md: 2, lg: 2 } : 1}
                        gap={8}
                        mt={8}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {investment && investment.data.length > 0.1 ?
                            investment.data.map((item: any, idx: number) => (
                                <MotionBox
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <LandCard {...item} />
                                </MotionBox>
                            ))
                            :
                            <EmptyState title="no properties" />}
                    </MotionSimpleGrid>
                </Container>
            </Center>
        </DashboardLayout>
    );
}
