import AuthLayout from "@/layout/AuthLayout";
import KYCForm from "@/template/auth/KYCForm";
import { COLORS } from "@/utils/theme";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function SignIn() {

    return (
        <AuthLayout>
            <Box
                bg={COLORS.bg_gray}
                overflow={"scroll"}
                pos="relative"
                w="full"

            >
                <Text color={COLORS.deep_black} fontWeight="700" fontSize={{ base: "20px", md: "52px" }} lineHeight={{ base: "22px", md: "62px" }} textAlign={["center", "center", "center", "start"]}>KYC</Text>
                <Text fontSize="14px" mt="15px" color={COLORS.light_gray} textAlign={["center", "center", "center", "start"]}>
                    Verify your identity with KYC for a secure experience.</Text>

                <KYCForm />
            </Box>
        </AuthLayout>
    )
}