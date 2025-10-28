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
import { authRegister, authRegisterTeacher, CompleteKYC, getWallet } from "@/url/redux/slices/authSlice";
import useCustomToast from "@/hooks/useCustomToast";
import ROUTES from "@/utils/ROUTES";
import { CustomPhoneInput } from "../tools/CustomPhoneInput";
import { FaCity, FaLocationArrow, FaSatellite } from "react-icons/fa";

const MotionBox = motion(Box);

const KYCForm = () => {
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
        address: Yup.string().required('Address is required'),
        state: Yup.string().required('State is required'),
        city: Yup.string().required('City is required'),
        next_kin_name: Yup.string().required('Next of Kin Name is required')

    });

    const initiateSignUp = async (values: any, { setSubmitting }: any) => {
        try {
            setSubmitting(true);
            const loginData = { ...values, next_kin_number: phone.replace("+", "") };
            await dispatch(CompleteKYC(loginData) as any).unwrap();
            await dispatch(getWallet("")as any)
            router.push(ROUTES.dashboard);
            showToast('KYC successfully', 'success');

        } catch (error: any) {
            console.error('Sign up error:', error);
            showToast(error.message || 'Failed to verify', 'error');
            setSubmitting(false);
        }
    };

    return (
        <MotionBox
            animate={controls} // use animation controls
            initial={{ x: 100, opacity: 0 }} // only used once
        >
            <Formik
                initialValues={{  }}
                onSubmit={initiateSignUp}
                enableReinitialize
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Box w="full" mt="20px">
                            <VStack align="stretch">
                                <CustomInput label='House Address' name='address' placeholder='no 4' leftIcon={<Box p={4}><FaLocationArrow size={"16px"} /></Box>} />
                                <CustomInput label='State' name='state' placeholder='Lagos' leftIcon={<Box p={4}><FaSatellite size={"16px"} /></Box>} />
                                <CustomInput label='City' name='city' placeholder='Azusa' leftIcon={<Box p={4}><FaCity size={"16px"} /></Box>} />
                                <CustomInput label='Next of Kin Name' name='next_kin_name' placeholder='Fxxxx' leftIcon={<UserIcon />} />
                                <CustomPhoneInput label='Next of Kin Phone Number' name='phone' placeholder='81xxxxx' setFieldValue={(e: string) => setPhone(e)} />
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
                            <Center justifyContent={"start"} ml={3} mb={0} cursor="pointer" onClick={() => router.push("/terms")} flexWrap="wrap" fontWeight="400" fontSize="12px" >
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
                            <Box mr="5px">Complete KYC</Box>
                        </Button>
                        <Box fontSize={["11px", "14px"]} mt="12px" mb="40px" color={COLORS.gray} lineHeight={"22px"} fontWeight={"500"}>
                            {"Don't want to complete?"} <span style={{ color: COLORS.blue }}><Link href="/dashboard">KYC</Link></span>
                        </Box>
                    </Form>
                )}
            </Formik>
        </MotionBox>
    );
};

export default KYCForm;
