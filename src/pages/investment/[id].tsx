import Navbar from "@/components/landingpage/LandingPageHeader";
import useCustomToast from "@/hooks/useCustomToast";
import DashboardLayout from "@/layout/DashboardLayout";
import { IsDepositModel } from "@/template/model/IsDepositModel";
import { getAssetSingle } from "@/url/redux/slices/assetSlice";
import { cashFormat } from "@/utils/cashformat";
import { COLORS } from "@/utils/theme";
import {
    Box,
    Text,
    Heading,
    Flex,
    SimpleGrid,
    VStack,
    Input,
    Button,
    Separator,
    Center,
    Spinner
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InvestmentDetails() {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState("0")
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const { user, wallet } = useSelector((a: { auth: { user: any, wallet: any } }) => a.auth)
    const { temporary } = useSelector((a: { asset: { temporary: any } }) => a.asset)
    const showMessage = useCustomToast();

    async function buyshare(a: number) {
        if (wallet) {
            if (wallet.withdraw_balance >= a) {

            } else {
                setOpen(true)
                showMessage("Insuffiecient Account", "info")
            }
        } else {
            router.push("auth/kyc")
        }
    }

    async function fetchDetails() {
        setLoading(true)
        const path = router.query && router.query.id
        if (path) await dispatch(getAssetSingle(path) as any)
        setLoading(false)
    }
    useEffect(() => {
        fetchDetails()
    }, [router.query && router.query.id])
    return (
        <DashboardLayout title="Dashboard - Land Banking">
            <Navbar />
            {loading ?
                <Center h="100vh">
                    <Spinner size={"xl"} color={COLORS.blue} />
                </Center>
                :
                <Box p={{ base: 4, md: 10 }} mt="80px" bg="gray.50" minH="100vh">
                    {/* Header */}
                    <Box mb={8}>
                        <Heading fontSize="2xl" mb={1}>{temporary.title}</Heading>
                        <Text color="gray.500">{temporary.title}</Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                        {/* Left Section */}
                        <VStack align="stretch" gap={6}>
                            {/* Project Overview */}
                            <Box bg="#0049AF1A" borderRadius="lg" p={6}>
                                <Heading fontSize={["16px", "20px"]} fontWeight={"500"} mb={1}>Project Overview</Heading>
                                <Text mb={4} color={COLORS.gray} fontSize={["12px", "16px"]}>
                                    {temporary.details}
                                </Text>
                                <Flex justify="space-between" color="gray.700" fontSize="sm">
                                    <Box>
                                        <Text fontWeight="400" fontSize={["12px", "16px"]} color={COLORS.gray}>Measurement</Text>
                                        <Text fontWeight="400" fontSize={["16px", "20px"]} mt={2} color={COLORS.black}>{temporary.measurement}x{temporary.measurement}</Text>
                                    </Box>
                                    <Box>
                                        <Text fontWeight="400" fontSize={["12px", "16px"]} color={COLORS.gray}>Time line</Text>
                                        <Text fontWeight="400" fontSize={["16px", "20px"]} mt={2} color={COLORS.black}>2–3 years</Text>
                                    </Box>
                                    <Box>
                                        <Text fontWeight="400" fontSize={["12px", "16px"]} color={COLORS.gray}>Current Investors</Text>
                                        <Text fontWeight="400" fontSize={["16px", "20px"]} mt={2} color={COLORS.black}>{(JSON.parse(temporary.investor)).length}</Text>
                                    </Box>
                                </Flex>
                            </Box>

                            {/* Financial Projection */}
                            <Box bg="white" borderRadius="lg" p={6} shadow="md">
                                <Heading fontSize="lg" mb={4}>Financial Projection</Heading>
                                <Flex justify="space-between" mb={2}>
                                    <Text color="gray.600">Expected Annual Yield</Text>
                                    <Text color="green.500" fontWeight="semibold">{temporary.percentage}%</Text>
                                </Flex>
                                <Flex justify="space-between">
                                    <Text color="gray.600">Total Profit in Amount</Text>
                                    <Text color="gray.700" fontWeight="semibold">{cashFormat(temporary.amount + ((temporary.amount * temporary.percentage) / 100))}</Text>
                                </Flex>
                            </Box>
                        </VStack>

                        {/* Right Section - Investment Card */}
                        <Box
                            bg="white"
                            p={6}
                            borderRadius="lg"
                            shadow="md"
                            alignSelf="flex-start"
                        >
                            <Heading fontSize="lg" mb={4}>Investment Details</Heading>

                            <Flex justify="space-between" mb={2}>
                                <Text color="gray.600">Share price</Text>
                                <Text fontWeight="semibold">{cashFormat(temporary.amount / temporary.shares)}</Text>
                            </Flex>
                            <Flex justify="space-between" mb={2}>
                                <Text color="gray.600">Total Value</Text>
                                <Text fontWeight="semibold">{cashFormat(temporary.amount)}</Text>
                            </Flex>

                            <Flex justify="space-between" mb={2}>
                                <Text color="gray.600">Total Shares</Text>
                                <Text fontWeight="semibold">{temporary.shares}</Text>
                            </Flex>

                            <Flex justify="space-between" mb={4}>
                                <Text color="gray.600">Shares Available</Text>
                                <Text fontWeight="semibold"> {Math.round(((temporary.amount - temporary.payment) / (temporary.amount / temporary.shares)))}</Text>
                            </Flex>

                            < Separator mb={4} />

                            <Text fontSize="sm" mb={2} color="gray.600">
                                Number of Shares {cashFormat((temporary.amount / temporary.shares) * ((value && JSON.parse(value)) ?? 0))}
                            </Text>
                            <Input
                                onChange={(e: any) => setValue(e.target.value)}
                                p={4} type="number" placeholder="Enter shares to purchase" mb={4} />

                            <Button
                                colorScheme="blue"
                                w="full"
                                bg={COLORS.blue}
                                disabled={((value && JSON.parse(value)) ?? 0) > 0 ? false : true}
                                onClick={() => user && user.id ? buyshare((temporary.amount / temporary.shares) * ((value && JSON.parse(value)) ?? 0)) : router.push("/auth/login")}
                                borderRadius="md"
                            >
                                Purchase Shares
                            </Button>
                            {open && <IsDepositModel />}
                        </Box>
                    </SimpleGrid>
                </Box >}
        </DashboardLayout >
    );
}
