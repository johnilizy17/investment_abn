import React, { useEffect } from "react"
import {
    Box,
    Stack,
    Badge,
    Progress,
    HStack,
    Heading,
    Text,
    Button,
    Center,
} from "@chakra-ui/react"
import { HiAtSymbol, HiStar } from "react-icons/hi"
import { useSelector } from "react-redux"
import { cashFormat, cashFormat2 } from "@/utils/cashformat"
import { EmptyState } from "@/utils/EmptyState"
import { COLORS } from "@/utils/theme"
import { useRouter } from "next/router"

interface InvestmentCardProps {
    title: string
    subtitle: string
    invest: string
    currentValue: string
    returnValue: string
    progress: number
    status: number
    shares: number
    id: string
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
    title,
    subtitle,
    invest,
    currentValue,
    returnValue,
    progress,
    status,
    shares,
    id
}) => {

    const router = useRouter();

    return (
        <Box
            bg="white"
            borderWidth="1px"
            borderColor="#E2E8F0"
            borderRadius="xl"
            p={6}
            boxShadow="sm"
            w="full"
        >
            <Stack spaceX={4}>
                {/* Header Section */}

                <HStack cursor="pointer" onClick={() => router.push(`/asset/view/${id}`)} justify="space-between" align="center">
                    <Heading size="sm" color="gray.800">
                        {title}
                    </Heading>
                    <Badge
                        variant="solid"
                        borderColor={status === 2 ? "yellow.600" : status === 3 ? "green.600" : COLORS.blue}
                        color={status === 2 ? "yellow.600" : status === 3 ? "green.600" : COLORS.blue}
                        bg="transparent"
                        borderWidth={"1px"}
                        borderRadius="10px"
                    >
                        <HStack spaceX={1} p={"5px"}>
                            <HiStar />
                            <span>{status === 1 ? "Pending" : status === 2 ? "Active" : status === 3 ? "Funding" : "Completed"}</span>
                        </HStack>
                    </Badge>
                </HStack>

                <Text cursor="pointer" onClick={() => router.push(`/asset/view/${id}`)} fontSize="sm" color="gray.500">
                    {subtitle}
                </Text>

                {/* Investment Info */}
                <HStack cursor="pointer" onClick={() => router.push(`/asset/view/${id}`)} flexDirection={["column", "column", "column", "row"]} justify="space-between">
                    <Box w={["full", "full", "full", "auto"]} display={["flex", "flex", "flex", "block"]} justifyContent={"space-between"}>
                        <Text fontSize="xs" color="gray.400">
                            Invest
                        </Text>
                        <Text fontWeight="bold">{cashFormat(invest)}</Text>
                    </Box>

                    <Box w={["full", "full", "full", "auto"]} display={["flex", "flex", "flex", "block"]} justifyContent={"space-between"}>
                        <Text fontSize="xs" color="gray.400">
                            Current Value
                        </Text>
                        <Text fontWeight="bold">{cashFormat(currentValue)}</Text>
                    </Box>
                    <Box w={["full", "full", "full", "auto"]} display={["flex", "flex", "flex", "block"]} justifyContent={"space-between"}>
                        <Text fontSize="xs" color="gray.400">
                            Shares Owned
                        </Text>
                        <Text fontWeight="bold">{cashFormat2(shares)}</Text>
                    </Box>

                    <Box w={["full", "full", "full", "auto"]} display={["flex", "flex", "flex", "block"]} justifyContent={"space-between"}>
                        <Text fontSize="xs" color="gray.400">
                            Return
                        </Text>
                        <Text fontWeight="bold" color="green.500">
                            {returnValue}%
                        </Text>
                    </Box>
                </HStack>
                <Center w={["full"]} gap={["10px", "30px"]} mt="10px" justifyContent={"space-between"}>
                    {status === 2 && <Button w="calc(50% - 100px)" onClick={() => router.push(`/investment/${id}`)} size="sm" p={"10px"} bg={COLORS.blue} colorPalette="blue">
                        Add Share
                    </Button>}
                    <Button size="sm" w="calc(50% - 100px)" p={"10px"} bg="transparent" borderWidth={"1px"} cursor="pointer" onClick={() => router.push(`/asset/view/${id}`)} borderColor={COLORS.black} color={COLORS.black}>
                        Sell shares
                    </Button>
                </Center>


                {/* Progress Bar */}
                <Progress.Root cursor="pointer" onClick={() => router.push(`/asset/view/${id}`)} mt="10px" value={progress} max={100}>
                    <Progress.Track bg="gray.300">
                        <Progress.Range bg="blue.500" />
                    </Progress.Track>
                    <Progress.Label>Performance: </Progress.Label>
                    <Progress.ValueText />
                </Progress.Root>
            </Stack>
        </Box>
    )
}

const PortfolioStatus: React.FC = () => {

    const { wallet } = useSelector((a: { auth: { wallet: any } }) => a.auth)

    const { investment, properties } = useSelector((a: { asset: { investment: any, properties: any } }) => a.asset)

    return (
        <Box mt={8}>
            <Heading size="md" mb={4} color="gray.800">
                My Investments
            </Heading>

            <Stack gap="20px">
                {properties && properties.asset.length > 0.1 ?
                    properties.asset.map((inv: any, idx: number) => (
                        <InvestmentCard key={idx} id={inv.investments.id} shares={inv.userAssets.shares} title={inv.investments.title} subtitle={inv.investments.details} currentValue={inv.investments.amount} invest={inv.userAssets.amount} returnValue={inv.investments.percentage} status={inv.investments.status} progress={((inv.investments.payment * 100) / inv.investments.shares)} />
                    ))
                    :
                    <EmptyState title="no investments yet" />
                }
            </Stack>
        </Box>
    )
}

export default PortfolioStatus