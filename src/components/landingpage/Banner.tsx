import { COLORS } from '@/utils/theme';
import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react';
import BannerStatic from './BannerStatic';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const MotionCenter = motion(Center as any);
const MotionBox = motion(Box as any);

export default function HomeBanner() {

    const router = useRouter();
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)


    return (
        <Center flexDir={"column"} justifyContent={"start"} backgroundSize={"cover"} h="100vh" w="full" bgImage={["url(/image/moblie_bg.png)", "url(/image/laptop_bg.png)"]}>
            <Center flexDir={"column"} justifyContent={"start"} h="100vh" w="full" background={"#00000070"}>
                <MotionCenter
                    bg="#0049AF"
                    opacity={0.8}
                    borderRadius={"32px"}
                    mt="100px"
                    px="16px"
                    py="8px"
                    color="#fff"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Now Accepting new investors
                </MotionCenter>
                <MotionBox
                    fontWeight={"500"}
                    textAlign={"center"}
                    lineHeight={"40px"}
                    mt="32px"
                    color="#fff"
                    fontSize={["28px", "48px"]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Invest in Landbanking
                    <br />Own a tangible Land shares
                </MotionBox>
                <MotionBox
                    fontWeight={"400"}
                    fontSize={["16px", "20px"]}
                    lineHeight={["17px", "22px"]}
                    mt={["30px", "35px"]}
                    color="#FFF"
                    maxW={"717px"}
                    textAlign={"center"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Access prime land investment opportunities through fractional ownership. Build wealth with tangible, appreciating assets without the complexity of direct real estate ownership.
                </MotionBox>
                <MotionCenter
                    mt={["30px", "35px"]}
                    gap="28px"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button
                        h="39px"
                        px="16px"
                        py="8px"
                        borderRadius={"10px"}
                        color={COLORS.white}
                        bg="transparent"
                        fontWeight={"500"}
                        onClick={() => user && user.id ? router.push("/dashboard") : router.push("/auth/login")}
                        borderColor={COLORS.white} borderWidth={"2px"}>
                        Start Investing
                    </Button>
                    <Button
                        h="39px"
                        px="16px"
                        py="8px"
                        borderRadius={"10px"}
                        fontWeight={"500"}
                        onClick={() => user && user.id ? router.push("/dashboard") : router.push("/auth/login")}
                        bg={COLORS.blue}>
                        View Land Banking
                    </Button>
                </MotionCenter>
                <BannerStatic />
            </Center>
        </Center>
    )
}
