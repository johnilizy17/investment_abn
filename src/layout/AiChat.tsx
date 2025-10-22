import { COLORS } from '@/utils/theme';
import { Box, Center } from '@chakra-ui/react';
import React from 'react';

export function AiChat() {

    return (
        <Center h="48px" w="151px" pos="fixed" zIndex={"4"} bg={"#0051FF"} borderRadius={"16px"} color={COLORS.white} bottom={{base:"30px", md:"20px"}} right={{base:4, md:12}}>
        </Center>
    )
}