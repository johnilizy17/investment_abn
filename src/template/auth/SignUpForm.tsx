import React, { useEffect, useState } from "react";
import {
    Box,
    VStack,
    Button,
    Center,
    Flex,
    SwitchRoot,
    SwitchHiddenInput,
    SwitchControl,
    SwitchLabel,
    Link
} from "@chakra-ui/react";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from "../tools/CustomInput";
import EmailIcon from "@/components/asset/EmailIcon";
import { COLORS } from "@/utils/theme";
import RightArrowIcon from "@/components/asset/RightArrowIcon";
import UserIcon from "@/components/asset/UserIcon";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";
import { authRegister, authRegisterTeacher } from "@/url/redux/slices/authSlice";
import useCustomToast from "@/hooks/useCustomToast";
import ROUTES from "@/utils/ROUTES";
import { CustomPhoneInput } from "../tools/CustomPhoneInput";

const MotionBox = motion(Box);

const SignUpForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const showToast = useCustomToast();
    const [guidian, setGuidian] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [phone, setPhone] = useState("")

    const controls = useAnimation();

    useEffect(() => {
        // Play animation once on mount
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
    }, []);

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required').max(255, 'Email is too long'),
        password: Yup.string().required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Must contain at least one lowercase letter')
            .matches(/[0-9]/, 'Must contain at least one number'),
        password_confirmation: Yup.string().required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Must contain at least one lowercase letter')
            .matches(/[0-9]/, 'Must contain at least one number'),
        firstName: Yup.string().required('First Name is required'),
        otherName: Yup.string().required('Other Name is required'),
        lastName: Yup.string().required('Last Name is required')
    });

    const initiateSignUp = async (values: any, { setSubmitting }: any) => {
        try {
            setSubmitting(true);
            const code = router.query.code || null;
            const admin = 1

            const loginData = { ...values, email: values.email.trim().toLowerCase(), password: values.password, phone: phone.replace("+", "") };
            await dispatch(authRegister(loginData) as any).unwrap();
            router.push(ROUTES.login);
            showToast('Account created successfully', 'success');

        } catch (error: any) {
            console.error('Sign up error:', error);
            showToast(error.message || 'Account already exists', 'error');
            setSubmitting(false);
        }
    };

    return (
        <MotionBox
            animate={controls} // use animation controls
            initial={{ x: 100, opacity: 0 }} // only used once
        >
            <Formik
                initialValues={{ email: "", password: "", password_confirmation: "", first_name: "", otherName: "", lastName: "" }}
                onSubmit={initiateSignUp}
                enableReinitialize
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Box w="full" mt="20px">
                            <VStack align="stretch">
                                <CustomInput label='Last Name' name='lastName' placeholder='Nakano' leftIcon={<UserIcon />} />
                                <CustomInput label='First Name' name='firstName' placeholder='Azusa' leftIcon={<UserIcon />} />
                                <CustomInput label='Other Name' name='otherName' placeholder='Azusa' leftIcon={<UserIcon />} />
                                <CustomInput label='Email Address' name='email' placeholder='elementary221b@gmail.com' leftIcon={<EmailIcon />} />
                                <CustomPhoneInput label='Phone Number' name='phone' placeholder='81xxxxx' setFieldValue={(e: string) => setPhone(e)} />
                                <CustomInput label='Password' name='password' placeholder='********' type='password' />
                                <CustomInput label='Password Confirmation' name='password_confirmation' placeholder='********' type='password' />


                            </VStack>
                        </Box>
                        <Flex
                            onClick={() => setRememberMe(!rememberMe)}
                            display='flex'
                            mt={"20px"}
                        >
                            <input
                                type='checkbox'
                                id='remember-me'
                                checked={rememberMe}
                            />
                            <Center justifyContent={"start"} ml={3} mb={0} cursor="pointer" onClick={() => router.push("/term")} flexWrap="wrap" fontWeight="400" fontSize="12px" >
                                <Box>By continuing you are indicating that you agree </Box>
                                <Box display="flex" ml="5px">{" "} to the <Box style={{ color: COLORS.blue, margin: "0 1px" }}>Terms</Box></Box>
                                <Box> and </Box>
                                <Box style={{ color: COLORS.blue, margin: "0 1px" }}>Privacy Policy</Box>
                                <Box>.</Box>
                            </Center>
                        </Flex>

                        <Button
                            colorScheme="light"
                            bg={COLORS.blue}
                            mt={["23px", "38px"]}
                            w={["full", "full", "full", "144px"]}
                            color={COLORS.white}
                            disabled={isSubmitting || !rememberMe}
                            loading={isSubmitting}
                            fontWeight="500"

                            fontSize="16px"
                            h="50px"
                            type="submit"
                            borderRadius="12px"
                        >
                            <Box mr="5px">Create Account</Box>
                        </Button>
                        <Box fontSize={["11px", "14px"]} mt="12px" mb="40px" color={COLORS.gray} lineHeight={"22px"} fontWeight={"500"}>
                            Already have an account? <span style={{ color: COLORS.blue }}><Link href="/auth/login"> Sign in</Link></span>
                        </Box>
                    </Form>
                )}
            </Formik>
        </MotionBox>
    );
};

export default SignUpForm;
