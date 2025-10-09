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

export default function LandCard({
    title,
    location,
    description,
    sharesPrice,
    minInvestment,
    yield: expectedYield,
    sharesAvailable,
    status,
}: any) {
    return (
        <Box
            p={6}
            borderRadius="lg"
            boxShadow="md"
            bg="white"
            transition="all 0.2s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
        >
            <Badge colorScheme="green" color={COLORS.green} textAlign={"center"} justifyContent={"center"} borderRadius={"55px"} borderWidth={"1px"} w="55.41px" h="19.85px" borderColor={"#1D7D00"} mb={3}>
                {status}
            </Badge>
            <Heading size="md">{title}</Heading>
            <Text color={COLORS.gray} fontSize="sm">
                {location}
            </Text>
            <Text mt={3} mb={4} color={COLORS.gray} fontSize="sm">
                {description}
            </Text>
            <Separator mb={4} />
            <Stack fontSize="sm">
                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Shares price:
                    </Box>
                    <Box color={COLORS.black}>
                        {sharesPrice}
                    </Box>
                </Center>
                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Min. Investment:
                    </Box>
                    <Box color={COLORS.black}>
                        {minInvestment}
                    </Box>
                </Center>
                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Expected Yield:
                    </Box>
                    <Box color={COLORS.black}>
                        <Text as="span" color="green.500">
                            {expectedYield}
                        </Text>
                    </Box>
                </Center>
                <Center justifyContent="space-between">
                    <Box color={COLORS.black}>
                        Shares Available:
                    </Box>
                    <Box color={COLORS.black}>
                        {sharesAvailable}
                    </Box>
                </Center>

            </Stack>
            <Button borderRadius={"5.68px"} mt={5} w="full" colorScheme="blue" bg={COLORS.blue}>
                View Details
            </Button>
        </Box>
    );
}
