"use client";

import Navbar from "@/components/landingpage/LandingPageHeader";
import PortfolioGrid from "@/components/porfolio/PortfolioGrid";
import PortfolioHeader from "@/components/porfolio/PortfolioHeader";
import PortfolioPerformance from "@/components/porfolio/PortfolioPerformance";
import PortfolioStatus from "@/components/porfolio/PortfolioStatus";
import DashboardLayout from "@/layout/DashboardLayout";
import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box as any);
const MotionContainer = motion(Container as any);

export default function PortfolioPage() {

    return (
        <DashboardLayout title="Marektplace - Land Banking">
            <Navbar />
            <Center>
                <MotionContainer
                    mt="100px"
                    maxW="1200px"
                    px={4}
                    pb={10}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    <MotionBox variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        <PortfolioHeader />
                    </MotionBox>
                    <MotionBox variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        <PortfolioGrid />
                    </MotionBox>
                    <MotionBox variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        <PortfolioPerformance />
                    </MotionBox>
                    <MotionBox variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        <PortfolioStatus />
                    </MotionBox>
                </MotionContainer>
            </Center>
        </DashboardLayout>
    );
}
