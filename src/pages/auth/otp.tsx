// pages/signup.tsx

import GoogleIcon from "@/components/asset/GoogleIcon";
import Navbar from "@/components/landingpage/LandingPageHeader";
import AuthLayout from "@/layout/AuthLayout";
import OtpInput from "@/template/auth/OTPForm";
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
import { motion } from "framer-motion";
import * as Yup from "yup";

// Validation schema using Yup
const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    isAdmin: Yup.boolean(),
});

const MotionBox = motion(Box);


export default function OTP() {
    return (
        <AuthLayout title="OTP">
            <Box
                h="100vh"
                bg={COLORS.bg_gray}
                overflow={"scroll"}
                pos="relative"
                w="full"
            >
                <Stack mb={4} w="full">
                    <Text color={COLORS.lighter_blue} fontWeight="700" fontSize={{ base: "20px", md: "28px" }} lineHeight={{ base: "22px", md: "26px" }}>Got it, please confirm the OTP number</Text>
                    <Text fontSize="14px" color={COLORS.light_gray}>
                        You will get a confirmation code via your email, please enter the code below in order to continue
                    </Text>
                </Stack>
                <MotionBox
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <OtpInput />
                </MotionBox>
            </Box>
        </AuthLayout>
    );
}
