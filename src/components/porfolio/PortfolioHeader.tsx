"use client";

import { COLORS } from "@/utils/theme";
import { Flex, Box, Heading, Text, IconButton, HStack } from "@chakra-ui/react";
import { FaDownload, FaPlus } from "react-icons/fa";

export default function PortfolioHeader() {
    return (
        <Flex
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            direction={{ base: "column", md: "row" }}
            mb={8}
            gap={4}
        >
            <Box>
                <Heading fontSize="2xl" fontWeight="700">
                    My Portfolio
                </Heading>
                <Text color="gray.600" fontSize="sm" mt={1}>
                    Here’s an overview of your land and investment portfolio
                </Text>
            </Box>

            <HStack gap={3}>
                <IconButton

                    aria-label="Download Portfolio"
                    variant="outline"
                    colorScheme="blue"
                    size="md"

                >
                    <FaDownload color={COLORS.blue} />
                </IconButton>
                <IconButton
                    aria-label="Add Investment"
                    colorScheme="blue"
                    bg={COLORS.blue}
                    size="md"
                >
                    <FaPlus />
                </IconButton>
            </HStack>
        </Flex>
    );
}
