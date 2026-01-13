"use client";

import { COLORS } from "@/utils/theme";
import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    VStack,
    List,
    Icon,
    Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaInfoCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const MotionBox = motion(Box as any);
const MotionFlex = motion(Flex as any);
const MotionHeading = motion(Heading as any);
const MotionListItem = motion(List.Item as any);

export default function SmartLandInvestment() {

    const router = useRouter();
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)

    return (
        <Center px={4}>
            <MotionFlex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="flex-end"
                bg="white"
                w="full"
                maxW="1200px"
                p={[4, 16]}
                borderRadius="2xl"
                boxShadow="md"
                gap={10}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                {/* Left Section */}
                <Box flex="1">
                    <MotionHeading
                        as="h2"
                        fontSize={["20px", "36px"]}
                        lineHeight={"100%"}
                        mb={3}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Everything You Need for Smart Land Investment
                    </MotionHeading>

                    <Text color={COLORS.gray} mb={6}>
                        Our platform provides all the tools and transparency you need to make
                        informed land investment decisions
                    </Text>

                    <List.Root ml={4} gap="3" color={COLORS.black} mb={6}>
                        {[
                            "Diversified land portfolio across multiple locations",
                            "Professional land management and development oversight",
                            "Quarterly dividend distributions from land income",
                            "Easy liquidity through our secondary marketplace",
                            "Full legal documentation and title verification",
                            "Mobile-first platform for easy investment management"
                        ].map((item, idx) => (
                            <MotionListItem
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                            >
                                {item}
                            </MotionListItem>
                        ))}
                    </List.Root>

                    <Button onClick={() => user && user.id ? router.push("/dashboard") : router.push("/auth/login")}
                        p={4} bg={COLORS.blue} borderRadius={"12px"} colorScheme="blue" size="md">
                        Get Started
                    </Button>
                </Box>

                {/* Right Card Section */}
                <MotionBox
                    flex={["1", "0.6"]}
                    bg="gray.50"
                    w="full"
                    p={8}
                    borderRadius="xl"
                    boxShadow="sm"
                    textAlign="left"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <VStack align="stretch" gap={3}>
                        <Flex justify="space-between">
                            <Text fontWeight="medium">Location:</Text>
                            <Text color="gray.700">Lagos, Nigeria</Text>
                        </Flex>
                        <Flex justify="space-between">
                            <Text fontWeight="medium">Land Size:</Text>
                            <Text color="gray.700">250 acres</Text>
                        </Flex>
                        <Flex justify="space-between">
                            <Text fontWeight="medium">Share Price:</Text>
                            <Text color="gray.700">₦4 million</Text>
                        </Flex>
                        <Flex justify="space-between">
                            <Text fontWeight="medium">Expected ROI:</Text>
                            <Text color="gray.700">8.5% annually</Text>
                        </Flex>
                    </VStack>

                    <Button mt={6} onClick={() => router.push("/marketplace")} colorScheme="blue" p={4} bg={COLORS.blue} borderRadius={"12px"} width="full">
                        View Details
                    </Button>
                </MotionBox>
            </MotionFlex>
        </Center>
    );
}
