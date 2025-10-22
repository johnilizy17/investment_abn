import React, { useEffect, useState } from "react";
import {
    Box,
    VStack,
    Center,
    Button,
    Flex,
    Link,
} from "@chakra-ui/react";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from "../tools/CustomInput";
import EmailIcon from "@/components/asset/EmailIcon";
import { COLORS } from "@/utils/theme";
import RightArrowIcon from "@/components/asset/RightArrowIcon";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authLogin } from "@/url/redux/slices/authSlice";
import useCustomToast from "@/hooks/useCustomToast";
import ROUTES from "@/utils/ROUTES";

const MotionBox = motion(Box);

const LoginInForm = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required')
            .max(255, 'Email is too long'),
        password: Yup.string().required('Password is required'),
    });

    const dispatch = useDispatch();
    const showToast = useCustomToast();
    const router = useRouter();

    // Animation controls
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
    }, []);

    const initiateLogin = async (values: any, { setSubmitting }: any) => {
        try {
            setSubmitting(true);

            const loginData = {
                email: values.email.trim().toLowerCase(),
                password: values.password,
            };

            await dispatch(authLogin(loginData) as any).unwrap()
                .then((a: any) => {
                    router.push(ROUTES.dashboard);
                    showToast('Login successful', 'success');
                });
        } catch (error: any) {
            showToast(error?.message || 'Login failed', 'error');
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={initiateLogin}
            enableReinitialize
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => (
                <Form>
                    <MotionBox
                        animate={controls} // Use animation controls
                        initial={{ x: 100, opacity: 0 }} // only used once
                    >
                        <VStack mt="50px">
                            <Box w='full'>
                                <CustomInput
                                    label='Email Address'
                                    name='email'
                                    placeholder='elementary221b@gmail.com'
                                    fieldProps={{ type: 'text' }}
                                    leftIcon={<EmailIcon />}
                                />
                            </Box>

                            <Box w='full'>
                                <CustomInput
                                    label='Password'
                                    name='password'
                                    placeholder='********' type='password'
                                />
                            </Box>
                        </VStack>
                        <Flex w='full' mt="25px" justify='space-between' mb='20px' align='center' fontSize={["11px", "14px"]}>
                            <Flex
                                onClick={() => setRememberMe(!rememberMe)}
                                display='flex'
                                alignItems='center'
                            >
                                <input
                                    type='checkbox'
                                    id='remember-me'
                                    checked={rememberMe}
                                />
                                <Center ml={3} mb={0}>
                                    Remember me
                                </Center>
                            </Flex>
                            <Link color={COLORS.blue} href='/auth/forgot-password'>
                                Forgot password?
                            </Link>
                        </Flex>

                        <Button
                            colorScheme="light"
                            bg={COLORS.blue}
                            mt={["23px", "38px"]}
                            w={["full", "full", "full", "144px"]}
                            color={COLORS.white}
                            disabled={isSubmitting}
                            loading={isSubmitting}
                            fontWeight="500"

                            fontSize="16px"
                            h="50px"
                            type="submit"
                            borderRadius="12px"
                        >
                            <Box mr="5px">Sign In</Box>
                        </Button>
                        <Box fontSize={["11px", "14px"]} mt="12px" mb="40px" color={COLORS.gray} lineHeight={"22px"} fontWeight={"500"}>
                            {"Don't have an account?"} <span style={{ color: COLORS.blue }}><Link href="/auth/signin"> Create free account</Link></span>
                        </Box>
                    </MotionBox>
                </Form>
            )}
        </Formik>
    );
};

export default LoginInForm;
