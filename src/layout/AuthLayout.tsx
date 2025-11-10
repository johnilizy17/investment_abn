"use client";

import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Input,
    Button,
    Checkbox,
    Link,
    Avatar,
    Icon,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function AuthLayout({ children }: any) {
    return (
        <Flex h="100vh" overflow={"hidden"} direction={{ base: "column", md: "row" }}>
            {/* Left Side */}
            <Flex
                flex="1"
                bg="#0047BB"
                bgImage="url('/image/auth.png')"
                bgSize="contain"
                bgRepeat={"no-repeat"}
                bgPos="right"
                color="white"
                display={["none", "none", "none", "flex"]}
                direction="column"
                px={{ base: 6, md: 12 }}
                py={20}
            >
                <Box display={"flex"} flexDir={"column"} justifyContent={"space-between"} h="100vh" maxW="md">
                    <Box>
                        <Heading fontSize={{ base: "60px", md: "60px" }} lineHeight={"66px"} fontWeight="bold">
                            Welcome to AB Narinohs Ltd
                        </Heading>
                        <Text mt={4} fontSize={"18px"} opacity={0.9}>
                            Your gateway to smarter, more secure investing.
                        </Text>
                    </Box>
                    {/* Testimonial */}
                    <Box>
                        <HStack gap={1}>
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <Icon key={i} as={FaStar} color="yellow.400" boxSize={5} />
                                ))}
                        </HStack>

                        <Text mt={4} fontSize="md">
                            Login to your account to access your personalized investment dashboard, monitor your portfolio, and manage your financial growth — all in one place.
                        </Text>

                        <HStack mt={6} gap={3}>
                            <Avatar.Root>
                                <Avatar.Fallback name="Shonira Abiola"
                                />
                            </Avatar.Root>
                            <Box>
                                <Text fontWeight="bold">Shonira Abiola</Text>
                                <Text fontSize="sm" opacity={0.8}>
                                    Founder of ABN
                                </Text>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </Flex>

            {/* Right Side */}
            <Flex flex="1" overflow={"scroll"} bg="gray.50">
                <Box w="full"  bg="white" px={{ base: 6, md: 12 }}
                    py={20} >
                    {children}
                </Box>
            </Flex>
        </Flex>
    );
}
