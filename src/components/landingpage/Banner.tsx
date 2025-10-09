import { COLORS } from '@/utils/theme';
import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react';
import BannerStatic from './BannerStatic';

export default function HomeBanner() {

    return (
        <Center flexDir={"column"} justifyContent={"start"} backgroundSize={"cover"} h="100vh" w="full" bgImage={["url(/image/moblie_bg.png)", "url(/image/laptop_bg.png)"]}>
            <Center bg="#0049AFB2" borderRadius={"32px"} mt="100px" px="16px" py="8px" color="#fff">
                Now Accepting new investors
            </Center>
            <Box fontWeight={"500"} textAlign={"center"} lineHeight={"40px"} mt="32px" color="#fff" fontSize={["28px", "48px"]}>
                Invest In Land Banks - Own Your Land In <br />Shares
            </Box>
            <Box fontWeight={"800"} fontSize={["16px", "20px"]} lineHeight={["17px", "22px"]} mt={["30px", "35px"]} color="#FFF" maxW={"717px"} textAlign={"center"}>
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
                    fontWeight={"600"}
                    borderColor={COLORS.white} borderWidth={"2px"}>
                    Start Investing
                </Button>
                <Button
                    h="39px"
                    px="16px"
                    py="8px"
                    borderRadius={"10px"}
                    fontWeight={"600"}
                    bg={COLORS.blue}>
                    View Land Banking
                </Button>
            </Center>
            <BannerStatic />
        </Center>
    )
}