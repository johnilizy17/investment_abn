// pages/signup.tsx

import GoogleIcon from "@/components/asset/GoogleIcon";
import Navbar from "@/components/landingpage/LandingPageHeader";
import AuthLayout from "@/layout/AuthLayout";
import ForgottenForm from "@/template/auth/ForgottenForm";
import { COLORS } from "@/utils/theme";
import {
    Box,
    Button,
    Center,
    Checkbox,
    Heading,
    Input,
    InputGroup,
    Separator,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Forgotten() {
    return (
        <Box
            h="100vh"
            bg={COLORS.bg_gray}
            pos="relative"
            w="full"
        >
            <Stack mb={4} w="full">
                <Text color={COLORS.deep_black} fontWeight="700"  fontSize={{ base: "20px", md: "28px" }} lineHeight={{ base: "22px", md: "26px" }}>Forgot password?</Text>
                <Text fontSize="14px" color={COLORS.light_gray}>
                    No problem! Enter your email and we’ll send a magic link.
                </Text>
            </Stack>
            <ForgottenForm />
        </Box>
    );
}
