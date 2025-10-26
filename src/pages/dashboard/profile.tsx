"use client";
import { useState } from "react";
import {
    Box,
    VStack,
    Text,
    Avatar,
    Button,
    Icon,
    Flex,
    HStack,
    Spacer,
    Separator,
} from "@chakra-ui/react";
import { Edit2, Eye, EyeOff, Shield, ShoppingBag, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { cashFormat } from "@/utils/cashformat";
import { useRouter } from "next/router";

export default function ProfilePage() {
    const [showBvn, setShowBvn] = useState(false);
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)
    const { wallet } = useSelector((a: { auth: { wallet: any } }) => a.auth)
    const router = useRouter();

    return (
        <Box bg="#F0F5FC" minH="100vh" pb={10}>
            {/* Header Section */}
            <Box
                bg="#E8F0FB"
                borderBottomRadius="2xl"
                pt={10}
                pb={6}
                textAlign="center"
            >
                <Text fontWeight="bold" color="#001C55" mb={4}>
                    Profile
                </Text>

                {/* Profile Picture */}
                <Box
                    mx="auto"
                    w="90px"
                    h="90px"
                    borderRadius="full"
                    bg="#FFC62F"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                >
                    <Avatar.Root bg="transparent" width={"90px"}>
                        <Avatar.Fallback
                            name={user ? user.lastName + " " + user.firstName : "John Doe"}

                        />
                    </Avatar.Root>
                </Box>

                <Text mt={3} fontWeight="semibold" color="#001C55">
                    {user.lastName} {user.firstName}
                </Text>
                <Text fontSize="sm" color="gray.600">
                    {user.email}
                </Text>

                <Button
                    variant="ghost"
                    mt={3}
                    size="sm"
                    color="#001C55"
                    _hover={{ bg: "transparent", color: "#000" }}
                >
                    <Edit2 size={14} />  Edit Profile
                </Button>
            </Box>

            {/* Info Section */}
            <Box px={6} mt={6}>
                <VStack align="start" gap={4}>
                    <Box>
                        <Text fontSize="xs" color="gray.500">
                            Full Name
                        </Text>
                        <Text fontWeight="semibold">{user.lastName} {user.firstName}</Text>
                    </Box>

                    <Box>
                        <Text fontSize="xs" color="gray.500">
                            Email Address
                        </Text>
                        <Text fontWeight="semibold">{user.email}</Text>
                    </Box>

                    <Box>
                        <Text fontSize="xs" color="gray.500">
                            Residential Address
                        </Text>
                        <Text fontWeight="semibold">
                            {wallet && wallet.address ? wallet.address : "No Address Provided"}
                        </Text>
                    </Box>

                    <Box w="full">
                        <Text fontSize="xs" color="gray.500">
                            Wallet   Balance
                        </Text>
                        <Flex align="center">
                            <Text fontWeight="semibold" flex="1">
                                {showBvn
                                    ? (wallet && wallet.withdrawal_balance && cashFormat(wallet.withdrawal_balance))
                                    : "********************"}
                            </Text>
                            <Icon
                                as={showBvn ? EyeOff : Eye}
                                w={5}
                                h={5}
                                color="gray.500"
                                cursor="pointer"
                                onClick={() => setShowBvn(!showBvn)}
                            />
                        </Flex>
                    </Box>
                </VStack>
            </Box>

            {/* More Section */}
            <Box px={6} mt={8}>
                <Text fontSize="sm" color="#0041C2" mb={4}>
                    Navigation
                </Text>

                <VStack align="stretch" gap={3}>
                    <Flex onClick={() => router.push("/dashboard")} align="center">
                        <Icon as={Shield} color="#001C55" />
                        <Text ml={3} flex="1" fontWeight="medium">
                            Dashboard
                        </Text>
                        <Spacer />
                        <Icon as={ChevronRight} color="gray.500" />
                    </Flex>

                    <Separator />

                    <Flex align="center" onClick={() => router.push("/marketplace")}>
                        <Icon as={ShoppingBag} color="#001C55" />
                        <Text ml={3} flex="1" fontWeight="medium">
                            Market Place
                        </Text>
                        <Spacer />
                        <Icon as={ChevronRight} color="gray.500" />
                    </Flex>
                </VStack>
            </Box>
        </Box>
    );
}
