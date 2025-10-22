import { COLORS } from '@/utils/theme';
import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react';
import BannerStatic from './BannerStatic';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function HomeBanner() {

    const router = useRouter();
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)


    return (
        <Center flexDir={"column"} justifyContent={"start"} backgroundSize={"cover"} h="100vh" w="full" bgImage={["url(/image/moblie_bg.png)", "url(/image/laptop_bg.png)"]}>
            <Center flexDir={"column"} justifyContent={"start"} h="100vh" w="full" background={"#00000070"}>
                <Center bg="#0049AF" opacity={0.8} borderRadius={"32px"} mt="100px" px="16px" py="8px" color="#fff">
                    Now Accepting new investors
                </Center>
                <Box fontWeight={"500"} textAlign={"center"} lineHeight={"40px"} mt="32px" color="#fff" fontSize={["28px", "48px"]}>
                    Invest In Land Banks - Own Your Land In <br />Shares
                </Box>
                <Box fontWeight={"400"} fontSize={["16px", "20px"]} lineHeight={["17px", "22px"]} mt={["30px", "35px"]} color="#FFF" maxW={"717px"} textAlign={"center"}>
                    Access prime land investment opportunities through fractional ownership. Build wealth with tangible, appreciating assets without the complexity of direct real estate ownership.
                </Box>
                <Center mt={["30px", "35px"]} gap="28px">
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
                </Center>
                <BannerStatic />
            </Center>
        </Center>
    )
}