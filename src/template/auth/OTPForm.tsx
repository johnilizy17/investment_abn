// components/OtpInput.tsx
import useCustomToast from "@/hooks/useCustomToast";
import { COLORS } from "@/utils/theme";
import { Box, Button, Center, HStack, PinInput, PinInputControl, PinInputHiddenInput, PinInputInput, PinInputRoot, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function OtpInput() {

    const [timer, setTimer] = useState(30);
    const [isActive, setIsActive] = useState(false);
    const [otp, setOtp] = useState("");
    const showMessage = useCustomToast();
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)

    const router = useRouter();

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setIsActive(true);
        }
        return () => clearInterval(interval);
    }, [timer]);

    async function ProfileVerified() {
        if (otp.length > 5) {
            // if (otp === user.code) {
                // showMessage("Code successfullt verified", "success")
                // if (user.accountable_type === "App\\Models\\Teacher") {
                //     await updateTeachers({ id: user.id, is_verified: 1 })
                // } else {
                //     await updateStudentDetails({ id: user.id, is_verified: 1 })
                // }
                // showMessage("Your account has been verified", "success");

                router.push("/auth/reset")
            // } else {
            //     showMessage("Code does not match the verification code", "error")
            // }
        }
    }
    useEffect(() => {
        ProfileVerified()
    }, [otp])

    const handleResend = () => {
        setTimer(30);
        setIsActive(false);
        // Add your resend logic here
    };

    const handleChange = (value: any) => {
        setOtp(value.target.value);
    };

    return (
        <Box>

            <Text mb={2} mt="64px" fontWeight="medium">
                Secure code
            </Text>
            <HStack>
                <PinInputRoot onChange={handleChange} count={6} justifyContent={"space-between"} w="full" maxW="400px">
                    <PinInputHiddenInput />
                    <PinInputControl justifyContent={"space-between"} w="full">
                        <PinInputInput _focus={{ borderColor: COLORS.blue }} placeholder="1" index={0} />
                        <PinInputInput _focus={{ borderColor: COLORS.blue }} placeholder="2" index={1} />
                        <PinInputInput _focus={{ borderColor: COLORS.blue }} placeholder="3" index={2} />
                        <PinInputInput _focus={{ borderColor: COLORS.blue }} placeholder="4" index={3} />
                        <PinInputInput _focus={{ borderColor: COLORS.blue }} placeholder="5" index={4} />
                        <PinInputInput _focus={{ borderColor: COLORS.blue }} placeholder="6" index={5} />
                    </PinInputControl>
                </PinInputRoot>
            </HStack>
            <Text mt={2} color="gray.500" fontSize="sm">
                This is a hint text to help user.
            </Text>
            <Center>
                {isActive ? (
                    <Button
                        onClick={handleResend}
                        size="sm"
                        variant="subtle"
                        bg="transparent"
                        colorScheme="blue"
                        mt={2}
                    >
                        Resend OTP
                    </Button>
                ) : (
                    <Text fontSize="sm" color="gray.400" mt={2}>
                        Resend OTP (0:{timer.toString().padStart(2, "0")})
                    </Text>
                )}
            </Center>
        </Box>
    );
}