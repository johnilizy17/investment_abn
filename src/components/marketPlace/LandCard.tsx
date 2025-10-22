import { cashFormat } from "@/utils/cashformat";
import { COLORS } from "@/utils/theme";
import {
    Box,
    Badge,
    Text,
    Heading,
    Stack,
    Button,
    Separator,
    Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function LandCard({
    title,
    location,
    details,
    id,
    amount,
    shares,
    percentage,
    payment,
    sharesAvailable,
    status,
}: any) {

    const router = useRouter();

    return (
        <Box
            p={6}
            borderRadius="lg"
            boxShadow="md"
            bg="white"
            transition="all 0.2s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
        >
            <Badge colorScheme="green" color={status == 2 ? COLORS.green : COLORS.blue} textAlign={"center"} justifyContent={"center"} borderRadius={"55px"} borderWidth={"1px"} w="55.41px" h="19.85px" borderColor={status == 2 ? COLORS.green : COLORS.blue} mb={3}>
                {status == 1 ? "Pending" : status == 2 ? "Active" : "Funding"}
            </Badge>
            <Heading size="md">{title}</Heading>
            <Text color={COLORS.gray} fontSize="sm">
                {location ?? "Non"}
            </Text>
            <Text mt={3} mb={4} color={COLORS.gray} fontSize="sm">
                {details}
            </Text>
            <Separator mb={4} />
            <Stack fontSize="sm">
                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Price per Shares:
                    </Box>
                    <Box color={COLORS.black}>
                        {cashFormat(amount / shares)}
                    </Box>
                </Center>
                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Total Value:
                    </Box>
                    <Box color={COLORS.black}>
                        {cashFormat(amount)}
                    </Box>
                </Center>
                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Expected Yield:
                    </Box>
                    <Box color={COLORS.black}>
                        <Text as="span" color="green.500">
                            {percentage} %
                        </Text>
                    </Box>
                </Center>
                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Shares Available:
                    </Box>
                    <Box
                        color={
                            ((amount - payment) / (amount / shares)) < 20
                                ? "red"
                                : ((amount - payment) / (amount / shares)) < 50
                                    ? "black"
                                    : "blue"
                        }
                    >
                        {Math.round(((amount - payment) / (amount / shares)))}
                    </Box>
                </Center>

                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Total Shares:
                    </Box>
                    <Box color={COLORS.black}>
                        {shares}
                    </Box>
                </Center>
            </Stack>
            <Button onClick={() => router.push(`investment/${id}`)} borderRadius={"5.68px"} mt={5} w="full" colorScheme="blue" bg={COLORS.blue}>
                View Details
            </Button>
        </Box>
    );
}
