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

export default function SmartLandInvestment() {

    const router = useRouter();
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)

    return (
        <Center px={4}>
            <Flex
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
            >
                {/* Left Section */}
                <Box flex="1">
                    <Heading as="h2" fontSize={["20px", "36px"]} lineHeight={"100%"} mb={3}>
                        Everything You Need for Smart Land Investment
                    </Heading>

                    <Text color={COLORS.gray} mb={6}>
                        Our platform provides all the tools and transparency you need to make
                        informed land investment decisions
                    </Text>

                    <List.Root ml={4} gap="3" color={COLORS.black} mb={6}>
                        <List.Item>
                            Diversified land portfolio across multiple locations
                        </List.Item>
                        <List.Item>
                            Professional land management and development oversight
                        </List.Item>
                        <List.Item>
                            Quarterly dividend distributions from land income
                        </List.Item>
                        <List.Item>
                            Easy liquidity through our secondary marketplace
                        </List.Item>
                        <List.Item>
                            Full legal documentation and title verification
                        </List.Item>
                        <List.Item>
                            Mobile-first platform for easy investment management
                        </List.Item>
                    </List.Root>

                    <Button onClick={() => user && user.id ? router.push("/dashboard") : router.push("/auth/login")}
                        p={4} bg={COLORS.blue} borderRadius={"12px"} colorScheme="blue" size="md">
                        Get Started
                    </Button>
                </Box>

                {/* Right Card Section */}
                <Box
                    flex={["1", "0.6"]}
                    bg="gray.50"
                    w="full"
                    p={8}

                    borderRadius="xl"
                    boxShadow="sm"
                    textAlign="left"
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

                    <Button mt={6} onClick={()=>router.push("/marketplace")} colorScheme="blue" p={4} bg={COLORS.blue} borderRadius={"12px"} width="full">
                        View Details
                    </Button>
                </Box>
            </Flex>
        </Center>
    );
}
