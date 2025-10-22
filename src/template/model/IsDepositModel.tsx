import { COLORS } from "@/utils/theme"
import { Box, Button, Center, CloseButton, Drawer, Image, Portal, Separator } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useCustomToast from "@/hooks/useCustomToast";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../tools/CustomInput";
import { FiSave } from "react-icons/fi";
import { cashFormat } from "@/utils/cashformat";
import CopyIcon from "@/components/asset/CopyIcon";
import { FaPiggyBank, FaSave } from "react-icons/fa";

export const IsDepositModel = () => {

    const router = useRouter();
    const { user, wallet } = useSelector((a: { auth: { user: any, wallet: any } }) => a.auth)
    const [isOpen, setIsOpen] = useState(true);   // 👈 control drawer

    return (
        <Drawer.Root placement={"bottom"} open={isOpen} onOpenChange={(details) => {
            setIsOpen(details.open)
        }} >
            <Portal>
                <Drawer.Backdrop onClick={() => setIsOpen(false)} />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title p={4}>Deposit {cashFormat(wallet.withdrawal_balance)} </Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body p={4}>
                            <Center fontWeight={"700"} mb="5px" gap="10px" fontSize={"13px"} w="full" justifyContent={"space-between"}>
                                <Box>   Account Number:</Box>
                                <Center gap="10px">
                                    {wallet && wallet.order_id} <CopyIcon code={wallet.order_id} />
                                </Center>
                            </Center>
                            <Center mb="5px" fontWeight={"700"} fontSize={"13px"} w="full" justifyContent={"space-between"}>
                                <Box>
                                    Bank Name:
                                </Box>
                                <Box> Polaris</Box>
                            </Center>
                            <Center fontWeight={"700"} fontSize={"13px"} w="full" justifyContent={"space-between"}>
                                <Box>
                                    Account Name:
                                </Box>
                                <Box> {user.lastName}, {user.firstName}{"(IV)"}</Box>
                            </Center>
                            <Center mt="10px" gap="10px" justifyContent={"end"}>
                                <Button
                                    onClick={() => setIsOpen(false)}
                                    p={4} variant="outline">Cancel</Button>
                            </Center>
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>

    )
}
