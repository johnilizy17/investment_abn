import React from "react"
import {
    Box,
    Stack,
    Badge,
    Progress,
    HStack,
    Heading,
    Text,
    Button,
} from "@chakra-ui/react"
import { HiAtSymbol, HiStar } from "react-icons/hi"

interface InvestmentCardProps {
    title: string
    subtitle: string
    invest: string
    currentValue: string
    returnValue: string
    progress: number
    status: "Active" | "Closed"
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
    title,
    subtitle,
    invest,
    currentValue,
    returnValue,
    progress,
    status,
}) => {
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
                <HStack justify="space-between" align="center">
                    <Heading size="sm" color="gray.800">
                        {title}
                    </Heading>
                    <Badge
                        variant="solid"
                        borderColor={status === "Active" ? "green" : "red"}
                        color={status === "Active" ? "green" : "red"}
                        bg="transparent"
                        borderWidth={"1px"}
                        borderRadius="10px"
                    >
                        <HStack spaceX={1} p={"5px"}>
                            <HiStar />
                            <span>{status}</span>
                        </HStack>
                    </Badge>
                </HStack>

                <Text fontSize="sm" color="gray.500">
                    {subtitle}
                </Text>

                {/* Investment Info */}
                <HStack flexDirection={["column", "column", "column", "row"]} justify="space-between">
                    <Box w={["full", "full", "full", "auto"]} display={["flex", "flex", "flex", "block"]} justifyContent={"space-between"}>
                        <Text fontSize="xs" color="gray.400">
                            Invest
                        </Text>
                        <Text fontWeight="bold">{invest}</Text>
                    </Box>

                    <Box w={["full", "full", "full", "auto"]} display={["flex", "flex", "flex", "block"]} justifyContent={"space-between"}>
                        <Text fontSize="xs" color="gray.400">
                            Current Value
                        </Text>
                        <Text fontWeight="bold">{currentValue}</Text>
                    </Box>

                    <Box w={["full", "full", "full", "auto"]} display={["flex", "flex", "flex", "block"]} justifyContent={"space-between"}>
                        <Text fontSize="xs" color="gray.400">
                            Return
                        </Text>
                        <Text fontWeight="bold" color="green.500">
                            {returnValue}
                        </Text>
                    </Box>
                    <Button size="sm" p={"10px"} colorPalette="blue">
                        View Details
                    </Button>
                </HStack>

                {/* Progress Bar */}
                <Progress.Root  mt="10px" value={progress} max={100}>
                    <Progress.Track bg="gray.100">
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
    const investments: InvestmentCardProps[] = [
        {
            title: "ABN Estate",
            subtitle: "Own 20 Acre owned",
            invest: "₦15,750",
            currentValue: "₦19,750",
            returnValue: "+10%",
            progress: 70,
            status: "Active",
        },
        {
            title: "ABN Estate",
            subtitle: "Own 20 Acre owned",
            invest: "₦15,750",
            currentValue: "₦19,750",
            returnValue: "+10%",
            progress: 70,
            status: "Active",
        },
    ]

    return (
        <Box mt={8}>
            <Heading size="md" mb={4} color="gray.800">
                My Investments
            </Heading>

            <Stack gap="20px">
                {investments.map((inv, idx) => (
                    <InvestmentCard key={idx} {...inv} />
                ))}
            </Stack>
        </Box>
    )
}

export default PortfolioStatus