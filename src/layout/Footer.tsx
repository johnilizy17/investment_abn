"use client";

import {
    Box,
    Container,
    Grid,
    GridItem,
    Text,
    Link,
    HStack,
    Icon,
    Stack,
    Image,
    Center,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <Box bg="#0047BB" color="white" mt={20} pt="28px">
            <Center w="full">

                <Container maxW="1200px" p={4}>

                    <Box mb={4}>
                        <Image maxW="200px" src="/logo/logo_white.png" alt="AB Narinohs Logo" />
                    </Box>
                    {/* Main Footer Content */}
                    <Grid
                        templateColumns={{
                            base: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        }}
                        gap={{ base: 10, md: 6 }}
                    >
                        {/* Column 1 */}
                        <GridItem>
                            <Text fontWeight="700" fontSize={["14px", "18px"]} mb={7}>
                                AB NARINOHS LTD
                            </Text>

                            <Text fontSize="sm" maxW="250px" mb={4} lineHeight="tall">
                                Gateway to better life and with future sustenance.
                            </Text>

                            <Stack gap={1} fontSize="sm">
                                <HStack>
                                    <MdEmail />
                                    <Link href="mailto:abnarinohsrealty@gmail.com" _hover={{ textDecoration: "underline" }}>
                                        abnarinohsrealty@gmail.com
                                    </Link>
                                </HStack>
                                <HStack>
                                    <FaPhone />
                                    <Link href="tel:+2349058511339" _hover={{ textDecoration: "underline" }}>
                                        +2349058511339 {"(lagos)"}
                                    </Link>
                                </HStack>
                                <HStack>
                                    <FaPhone />
                                    <Link href="tel:+2348151175414" _hover={{ textDecoration: "underline" }}>
                                        +2348151175414 {"(lagos)"}
                                    </Link>
                                </HStack>
                            </Stack>

                            {/* Social Icons */}
                        </GridItem>

                        {/* Column 2 */}
                        <GridItem>
                            <Text fontWeight="700" fontSize={["14px", "18px"]} mb={7}>
                                REGISTERED ADDRESS
                            </Text>
                            <Text fontSize="sm" maxW="200px">
                                9 Okun Ajah Complex off Abraham Adesanya okun Ajah Lagos.
                            </Text>
                        </GridItem>

                        {/* Column 3 */}
                        <GridItem>
                            <Text fontWeight="700" fontSize={["14px", "18px"]} mb={7}>
                                OUR LOCATIONS
                            </Text>
                            <Stack gap={1} fontSize="sm">
                                <Link>Lagos</Link>
                                <Link>Abuja</Link>
                                <Link>Kwara</Link>
                            </Stack>
                        </GridItem>

                        {/* Column 4 */}
                        <GridItem>
                            <Text fontWeight="700" fontSize={["14px", "18px"]} mb={7}>
                                DEVELOPMENTS
                            </Text>
                            <Stack gap={1} fontSize="sm">
                                <Link>Nigeria</Link>
                                <Link href="/about">About Us</Link>
                                <Link href="/contact">FAQ</Link>
                                <Link href="/term">Terms</Link>
                            </Stack>
                        </GridItem>
                    </Grid>

                    {/* Copyright */}
                    <Center justifyContent={"space-between"} borderTop="1px solid rgba(255,255,255,0.2)" mt={10} pt={6}>
                        <HStack mt={4} gap={4}>
                            <Link href="#" aria-label="Instagram">
                                <Icon as={FaInstagram} boxSize={5} />
                            </Link>
                            <Link href="#" aria-label="Facebook">
                                <Icon as={FaFacebookF} boxSize={5} />
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                <Icon as={FaLinkedinIn} boxSize={5} />
                            </Link>
                        </HStack>
                        <Text fontSize="sm" textAlign="center">
                            Copyright © 2025 AB NARINOHS
                        </Text>
                    </Center>
                </Container>
            </Center>
        </Box>
    );
}
