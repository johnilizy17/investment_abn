import AuthLayout from "@/layout/AuthLayout";
import LoginInForm from "@/template/auth/LoginForm";
import { COLORS } from "@/utils/theme";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box as any);

export default function Login() {

    return (
        <AuthLayout>
            <MotionBox
                bg={COLORS.bg_gray}
                overflow={"scroll"}
                pos="relative"
                w="full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Text color={COLORS.deep_black} fontWeight="700" fontSize={{ base: "20px", md: "52px" }} lineHeight={{ base: "22px", md: "62px" }} textAlign={["center", "center", "center", "start"]}>Welcome back!</Text>
                <Text fontSize="14px" mt="15px" color={COLORS.light_gray} textAlign={["center", "center", "center", "start"]}>
                    ABN is your trusted partner in smart investing — whether you’re just starting your investment journey or managing a growing portfolio.
                </Text>

                <LoginInForm />
            </MotionBox>
        </AuthLayout>
    )
}