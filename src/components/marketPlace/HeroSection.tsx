import { COLORS } from "@/utils/theme";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function HeroSection() {
    return (
        <Box textAlign="left" pb={10} mt="80px">
            <Heading fontSize={["20px", "48px"]} mb={["8px","16px"]}>
                Land Bank Marketplace
            </Heading>
            <Text color={COLORS.gray} fontSize={["12px", "20px"]}>
                Discover and invest in verified land development opportunities across Texas
            </Text>
        </Box>
    );
}
