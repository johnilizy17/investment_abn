import { COLORS } from "@/utils/theme"
import { Box, Button, Center, CloseButton, Drawer, Image, Portal, Separator } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useCustomToast from "@/hooks/useCustomToast";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../tools/CustomInput";
import { FiSave, FiVoicemail } from "react-icons/fi";
import UserIcon from "@/components/asset/UserIcon";
import { FaArrowUp } from "react-icons/fa";
import { cashFormat } from "@/utils/cashformat";
import { banklist } from '@/utils/banklist';
import { verifyWallet, withdrawWallet } from "@/url/triggers/wallet";

export const TransferModel = () => {

    const router = useRouter();
    const [choiceGroup, setChoiceGroup] = useState("");
    const showToast = useCustomToast();
    const { user, wallet } = useSelector((a: { auth: { user: any, wallet: any } }) => a.auth);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);   // 👈 control drawer
    const [verified, setVerified] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({});

    const validationSchema = Yup.object({
        amount: Yup.string().required("Amount is required"),
        account_number: Yup.string().required("Account Number is required"),
        account_bank: Yup.string().required("Bank is required")
    });

    const initiateVerify = async (values: any) => {
        try {
            setLoading(true);
            const result = await verifyWallet({...values, account_bank: banklist[values.account_bank].code});
            setData({ ...values, account_bank: banklist[values.account_bank].code})
             setChoiceGroup(result.data.account_name)
            setLoading(false);
        } catch (error: any) {
            // showToast(error?.response.data.message || 'failed to verify', 'error');
            setLoading(false);
        }
    };


    const initiateDeposit = async (values: any, { setSubmitting }: any) => {
        try {
            setSubmitting(true);
            setIsOpen(false)
            setChoiceGroup("")
            showToast('Successfully Deposited', 'success');
            setSubmitting(false);
        } catch (error: any) {
            showToast(error?.response.data.message || 'failed to verify', 'error');
            setSubmitting(false);
        }
    };


    return (
        <Drawer.Root placement={"bottom"} open={isOpen} onOpenChange={(open: any) => setIsOpen(open.opennn)}>
            <Drawer.Trigger asChild>
                <Button mt="20px" borderRadius={"12px"} color="#fff" colorScheme='pink' w="full" maxW={["140px"]}>
                    <FaArrowUp />   Transfer
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title p={4}>Transfer <span style={{ fontSize: 10, color: "gray", marginLeft: 20 }}>{cashFormat(wallet.withdrawal_balance)}</span></Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body p={4}>
                            <Formik
                                initialValues={{ amount: 0, account_bank: "" }}
                                enableReinitialize={true}
                                validationSchema={validationSchema}
                                onSubmit={initiateDeposit}
                            >
                                {({ isSubmitting, setFieldValue, values }) => (
                                    <Form>
                                        <Box w='full' maxW="full">
                                            <CustomInput
                                                label='Account Number'
                                                name='account_number'
                                                placeholder='xxxx'
                                                fieldProps={{ type: 'number' }}
                                                leftIcon={
                                                    <UserIcon />
                                                }
                                                typeInput=''
                                                value=''
                                            />
                                            <Box mt="2px">
                                            {choiceGroup}
                                            </Box>
                                        </Box>
                                        <Box w='full'>
                                            <CustomInput
                                                label="Select Bank"
                                                name="account_bank"
                                                placeholder="Enter Bank name"
                                                fieldProps={{ type: "select" }}
                                                typeInput=""
                                                type="select2"
                                                handleChange={(val: any) => setFieldValue('account_bank', val)}
                                                value={values.account_bank}
                                            >
                                                <option value={""}>Select Bank</option>
                                                {banklist.map((a, b) => (
                                                    <option key={b} value={b}>{a.name}</option>
                                                ))}
                                            </CustomInput>
                                        </Box>
                                        {/* <Box color="green" mb="2px">
                                            {choiceGroup}
                                        </Box> */}
                                        <Box w='full' maxW="full">
                                            <CustomInput
                                                label='Amount'
                                                name='amount'
                                                placeholder='10 XP'
                                                fieldProps={{ type: 'number' }}
                                                leftIcon={<Box p="10px">
                                                    <FiSave size="24px" />
                                                </Box>}
                                                typeInput=''
                                                value=''
                                            />
                                        </Box>
                                        <Center mt="30px" gap="10px" justifyContent={"end"}>
                                            <Button
                                                onClick={() => setIsOpen(false)}
                                                p={4} variant="outline">Cancel</Button>
                                            {choiceGroup && choiceGroup.length > 2 ?
                                                <Button p={4} disabled={values.amount > 0.1 ? (values.amount >= wallet.withdrawal_balance || isSubmitting) : true} type="submit" loading={isSubmitting} bg={COLORS.blue} colorScheme={"initial"}>Submit</Button>
                                                : <Button onClick={() => initiateVerify(values)} p={4} disabled={loading} loading={loading} bg={COLORS.brown} colorScheme={"initial"}>Verified</Button>
                                            }
                                        </Center>
                                    </Form>
                                )}
                            </Formik>
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
