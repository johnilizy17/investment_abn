'use client';
import { COLORS } from '@/utils/theme';
import {
    Box,
    Flex,
    Text,
    Button,
    IconButton,
    Image,
    Drawer,
    DrawerTrigger,
    DrawerRoot,
    DrawerBackdrop,
    DrawerPositioner,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    DrawerCloseTrigger,
    Portal,
    useDisclosure,
    Center,
    useSelect,
} from '@chakra-ui/react';
import MoblieMenu from './MoblieMenu';
import LaptopMenu from './LaptopMenu';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '@/url/redux/slices/authSlice';

export default function Navbar() {
    const { open, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const { user } = useSelector((a: { auth: { user: any } }) => a.auth)
    const dispatch = useDispatch()
    const [mounted, setMounted] = useState(false);



    return (
        <Box bg="white" left="0px" px={4} py={3} w="full" boxShadow="sm" position="fixed" top={0} zIndex={10}>
            <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
                {/* Logo Section */}
                <Flex align="center" cursor="pointer" onClick={() => { router.push("/") }} gap={2}>
                    <Image src="/logo/logo_b.png" h="50px" objectFit={"contain"} alt="ABN Logo" />
                </Flex>

                {/* Desktop Login */}
                <LaptopMenu />
                <Center>
                    {user && user.id && user.id ? (
                        <Button
                            onClick={() => dispatch(logout())}
                            fontWeight="500"
                            mr="4.5px"
                            colorScheme="blue"
                            w="100px"
                            h="40px"
                            borderColor={COLORS.red}
                            borderWidth={1}
                            color={COLORS.red}
                            bg="transparent"
                            borderRadius="10px"
                        >
                            Logout  <FiLogOut />
                        </Button>
                    ) : router.pathname === "/auth/login" ? (
                        <Button
                            onClick={() => router.push("/auth/signup")}
                            fontWeight="500"
                            mr="4.5px"
                            colorScheme="blue"
                            w="81px"
                            h="40px"
                            bg={COLORS.blue}
                            borderRadius="10px"
                        >
                            Sign Up
                        </Button>
                    ) : (
                        <Button
                            onClick={() => router.push("/auth/login")}
                            fontWeight="500"
                            mr="4.5px"
                            colorScheme="blue"
                            w="121px"
                            h="39px"
                            bg={COLORS.blue}
                            borderRadius="10px"
                        >
                            Get Started
                        </Button>
                    )}

                    {/* Mobile Trigger */}
                    <DrawerRoot placement="start" open={open} onOpenChange={open ? onClose : onOpen}>
                        <DrawerTrigger asChild>
                            <IconButton
                                display={{ base: 'flex', md: 'none' }}
                                variant="ghost"

                                aria-label="Open Menu"
                            >
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
                                    <g clip-path="url(#clip0_0_9285)">
                                        <path d="M4.75 16.9219H21.25C21.5359 16.9219 21.8105 17.0351 22.0127 17.2373C22.2149 17.4395 22.3281 17.7141 22.3281 18C22.3281 18.2859 22.2149 18.5605 22.0127 18.7627C21.8105 18.9649 21.5359 19.0781 21.25 19.0781H4.75C4.46406 19.0781 4.18949 18.9649 3.9873 18.7627C3.78512 18.5605 3.67188 18.2859 3.67188 18C3.67188 17.7141 3.78512 17.4395 3.9873 17.2373C4.18949 17.0351 4.46406 16.9219 4.75 16.9219ZM4.75 10.9219H21.25C21.5359 10.9219 21.8105 11.0351 22.0127 11.2373C22.2149 11.4395 22.3281 11.7141 22.3281 12C22.3281 12.2859 22.2149 12.5605 22.0127 12.7627C21.8105 12.9649 21.5359 13.0781 21.25 13.0781H4.75C4.46406 13.0781 4.18949 12.9649 3.9873 12.7627C3.78512 12.5605 3.67188 12.2859 3.67188 12C3.67188 11.7141 3.78512 11.4395 3.9873 11.2373C4.18949 11.0351 4.46406 10.9219 4.75 10.9219ZM4.75 4.92188H21.25C21.5359 4.92188 21.8105 5.03512 22.0127 5.2373C22.2149 5.43949 22.3281 5.71406 22.3281 6C22.3281 6.28594 22.2149 6.56051 22.0127 6.7627C21.8105 6.96488 21.5359 7.07812 21.25 7.07812H4.75C4.46406 7.07812 4.18949 6.96488 3.9873 6.7627C3.78512 6.56051 3.67188 6.28594 3.67188 6C3.67188 5.71406 3.78512 5.43949 3.9873 5.2373C4.18949 5.03512 4.46406 4.92188 4.75 4.92188Z" fill="#475569" stroke="#475569" stroke-width="0.09375" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_9285">
                                            <rect y="0.5" width="26" height="23" rx="11.5" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </IconButton>
                        </DrawerTrigger>

                        <Portal>
                            <DrawerBackdrop bg={COLORS.black} />
                            <DrawerPositioner>
                                <DrawerContent>
                                    <DrawerHeader w="full">
                                        <Center w="full" p="16px" pr="0px" justifyContent={"space-between"}>
                                            <Image onClick={() => { router.push("/") }} h="40px" objectFit={"contain"} src="/logo/logo_blue.png" alt="ABN Logo" />
                                            <IconButton
                                                display={{ base: 'flex', md: 'none' }}
                                                onClick={onClose}
                                                _hover={{ bg: "transparent" }}
                                                variant="ghost"
                                                aria-label="Open Menu"
                                            >
                                                <MdCancel />
                                            </IconButton>
                                        </Center>
                                    </DrawerHeader>

                                    <DrawerBody>
                                        <MoblieMenu />
                                    </DrawerBody>

                                    <DrawerFooter justifyContent="center">
                                        <Text fontSize="sm" color="gray.500">
                                            &copy; {new Date().getFullYear()} ABN
                                        </Text>
                                    </DrawerFooter>
                                </DrawerContent>
                            </DrawerPositioner>
                        </Portal>
                    </DrawerRoot>
                </Center>
            </Flex>
        </Box>
    );
}
