// components/LandBanking.js
import { COLORS } from "@/utils/theme";
import { Box, Flex, Text, VStack, Circle } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box as any);
const MotionVStack = motion(VStack as any);
const MotionText = motion(Text as any);

const steps = [
    {
        number: "1",
        title: "Browse Land Banks",
        description:
            "Explore verified land investment opportunities with detailed project information and financial projections.",
    },
    {
        number: "2",
        title: "Purchase Portions",
        description:
            "Invest in fractional shares of land projects that match your investment goals and risk tolerance.",
    },
    {
        number: "3",
        title: "Earn Returns",
        description:
            "Track your portfolio growth and receive dividends from land income and appreciation.",
    },
];

export default function LandBanking() {
    return (
        <Box py={16} px={6} textAlign="center" maxW="6xl" mx="auto">
            {/* Heading */}
            <MotionText
                fontSize={["20px", "36px"]}
                fontWeight="500"
                mb={"12px"}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                How Land Banking Works
            </MotionText>
            <MotionText
                color={COLORS.gray}
                fontSize={["12px", "16px"]}
                mb={12}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Our platform makes land investment accessible through a simple, transparent process
            </MotionText>

            {/* Steps */}
            <Flex justify="space-between" direction={{ base: "column", md: "row" }} gap={8}>
                {steps.map((step, idx) => (
                    <MotionVStack
                        key={step.number}
                        spaceX={4}
                        flex="1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                        <Circle size="50px" bg="#0049AF1A" color="black" fontWeight="bold">
                            {step.number}
                        </Circle>
                        <Text fontWeight="500" color={COLORS.black} fontSize="lg">
                            {step.title}
                        </Text>
                        <Text color={COLORS.gray} fontSize={["12px", "16px"]} lineHeight={"100%"} maxW="250px">
                            {step.description}
                        </Text>
                    </MotionVStack>
                ))}
            </Flex>
        </Box>
    );
}
