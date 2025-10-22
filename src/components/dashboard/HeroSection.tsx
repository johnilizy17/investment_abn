import { COLORS } from "@/utils/theme";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CopyIcon from "../asset/CopyIcon";
import { TransferModel } from "@/template/model/TransferModel";
import { DepositModel } from "@/template/model/DepositModel";

export default function HeroSection() {

    const { user, wallet } = useSelector((a: { auth: { user: any, wallet: any } }) => a.auth)

    return (
        <Box textAlign="left" pb={10} mt="80px">
            <Heading fontSize={["20px", "48px"]} mb={["8px", "20px"]}>
                Welcome back, {user.lastName}
            </Heading>
            <Text color={COLORS.gray} fontSize={["12px", "20px"]}>
                Here’s an overview of your land investment portfolio
            </Text>
            {wallet && <>
                <Center maxW={"300px"} justifyContent={"space-between"} gap="10px">
                    <TransferModel />
                    <DepositModel />
                </Center>
            </>}
        </Box>
    );
}
