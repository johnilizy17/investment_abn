import Navbar from "@/components/landingpage/LandingPageHeader";
import useCustomToast from "@/hooks/useCustomToast";
import DashboardLayout from "@/layout/DashboardLayout";
import { IsDepositModel } from "@/template/model/IsDepositModel";
import { getAssetSingle } from "@/url/redux/slices/assetSlice";
import { createAsset } from "@/url/triggers/asset";
import { cashFormat, cashFormat2 } from "@/utils/cashformat";
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
    Spinner,
    IconButton,
    Image,
    Link
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
    const [select, setSelect] = useState({ type: 1, item: temporary.left_image })
    const [select2, setSelect2] = useState({ type: 1, item: temporary.left_image })

    async function buyshare(a: number) {
        if (wallet) {
            if (wallet.withdrawal_balance >= a) {
                setLoading(true)
                try {
                    setOpen(false)
                    const amount = ((temporary.amount / temporary.shares) * ((value && JSON.parse(value)) ?? 0))
                    const asset = await createAsset({ assetId: temporary.id, shares: (value && JSON.parse(value)), amount: amount, })
                    showMessage("Properties successfully purchase", "success")
                    router.push("/dashboard")

                    setLoading(false)
                } catch (e: any) {
                    showMessage(e.response.data.message || "Properties failed to be purchase", "success")
                }
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
        if (path) {
            await dispatch(getAssetSingle(path) as any)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (temporary && temporary.left_image && temporary.left_image != "image") {
            setSelect({ type: 1, item: temporary.left_image })
        }
        if (temporary && temporary.right_image && temporary.right_image != "image") {
            setSelect({ type: 2, item: temporary.right_image })
        }
        if (temporary && temporary.front_image && temporary.front_image != "image") {
            setSelect({ type: 3, item: temporary.front_image })
        }
        if (temporary && temporary.back_image && temporary.back_image != "image") {
            setSelect({ type: 4, item: temporary.back_image })
        }
        fetchDetails()
    }, [router.query && router.query.id])


    function selectImageFix(a: number) {
        if (a == 1) {
            setSelect({ type: 1, item: temporary.left_image })
        } else if (a == 2) {
            setSelect({ type: 2, item: temporary.right_image })
        } else if (a == 3) {
            setSelect({ type: 3, item: temporary.front_image })
        } else if (a == 4) {
            setSelect({ type: 4, item: temporary.back_image })
        }
    }
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
                        <Box position="relative" my={4}>
                            {select2.item > 1 ? <Image src={select.item} alt="3D House" w="full" h="300px" objectFit="cover" borderRadius="lg" /> : <Image src={select.item} alt="3D House" w="full" h="300px" objectFit="cover" borderRadius="lg" />}
                            <Center mt="50px" gap={4}>
                                {temporary && temporary.left_image && temporary.left_image != "image" && <Box borderWidth={2} padding={1} borderRadius={4} borderColor={select.type == 1 ? COLORS.blue : COLORS.gray}> <Image w={select.type == 1 ? "60px" : "50px"} onClick={() => selectImageFix(1)} src={temporary.left_image} /> </Box>}

                                {temporary && temporary.right_image && temporary.right_image != "image" && <Box borderWidth={2} padding={1} borderRadius={4} borderColor={select.type == 2 ? COLORS.blue : COLORS.gray}> <Image w={select.type == 2 ? "60px" : "50px"} onClick={() => selectImageFix(2)} src={temporary.right_image} /> </Box>}

                                {temporary && temporary.front_image && temporary.front_image != "image" && <Box borderWidth={2} padding={1} borderRadius={4} borderColor={select.type == 3 ? COLORS.blue : COLORS.gray}> <Image w={select.type == 3 ? "60px" : "50px"} onClick={() => selectImageFix(3)} src={temporary.front_image} /> </Box>}
                                {temporary && temporary.back_image && temporary.back_image != "image" && <Box borderWidth={2} padding={1} borderRadius={4} borderColor={select.type == 4 ? COLORS.blue : COLORS.gray}> <Image w={select.type == 4 ? "60px" : "50px"} onClick={() => selectImageFix(4)} src={temporary.back_image} /> </Box>}
                            </Center>
                        </Box>

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
                                        <Text fontWeight="400" fontSize={["16px", "20px"]} mt={2} color={COLORS.black}>{temporary.duration ? `${temporary.duration} month` : "2–3 years"} </Text>
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
                            <Link
                                href={`https://www.google.com/maps/dir/?api=1&destination=${temporary.lat},${temporary.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    p={4} >
                                    Track the location live on Google Maps {">>>"}
                                </Button>
                            </Link>
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
                                <Text fontWeight="semibold">{cashFormat2(temporary.shares - temporary.payment)}</Text>
                            </Flex>

                            <Flex justify="space-between" mb={4}>
                                <Text color="gray.600">Shares Available</Text>
                                <Text fontWeight="semibold"> {Math.round(((temporary.amount - temporary.payment) / (temporary.amount / temporary.shares)))}</Text>
                            </Flex>

                            < Separator mb={4} />

                            <Text fontSize="sm" mb={2} color="gray.600">
                                Number of Shares {cashFormat((temporary.amount / temporary.shares) * ((value && JSON.parse(value)) ?? 0))}/<span style={wallet.withdrawal_balance && (wallet.withdrawal_balance - ((temporary.amount / temporary.shares) * ((value && JSON.parse(value)) ?? 0))) > 0 ? { color: COLORS.blue } : { color: COLORS.red }}> {wallet.withdrawal_balance ? cashFormat(wallet.withdrawal_balance - ((temporary.amount / temporary.shares) * ((value && JSON.parse(value)) ?? 0))) : cashFormat((temporary.amount / temporary.shares) * ((value && JSON.parse(value)) ?? 0))}</span>
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
