import React from "react";
import {
    Box,
    Container,
    Flex,
    VStack,
    HStack,
    Heading,
    Text,
    Input,
    Textarea,
    Button,
    Icon,
    Circle,
    SimpleGrid,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NoAuthLayout from "@/layout/NoAuthLayout";
import Navbar from "@/components/landingpage/LandingPageHeader";
import { COLORS } from "@/utils/theme";
import { motion } from "framer-motion";

const MotionBox = motion(Box as any);
const MotionVStack = motion(VStack as any);
const MotionHStack = motion(HStack as any);
const MotionFlex = motion(Flex as any);

export default function ContactSection() {
    const bgForm = COLORS.whitesmoke;
    const bgInfo = COLORS.whitesmoke;

    return (
        <NoAuthLayout title="Contact Us - ABN Narionhs Land Bank">
            <Navbar />
            <MotionFlex
                minH={{ base: "220px", md: "260px" }}
                align="center"
                justify="center"
                color="white"
                bg={COLORS.blue}
                px={4}
                mt="70px"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Container maxW="6xl" py={{ base: 8, md: 12 }}>
                    <MotionVStack
                        gap={3}
                        bg="rgba(255,255,255,0.0)"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Heading as="h1" size="2xl" color={COLORS.white} textAlign="center">
                            Get in Touch
                        </Heading>
                        <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" maxW="3xl">
                            {" Have questions about our land payment plans? We're here to help you start your journey to land ownership."}
                        </Text>
                    </MotionVStack>
                </Container>
            </MotionFlex>

            <Container justifyContent={"center"} display={"flex"} px={12}>
                <SimpleGrid maxW="1200px" pt="60px" columns={{ base: 1, md: 2 }} gap={10} mb={10}>
                    {/* Contact Form */}
                    <MotionBox
                        bg={bgForm}
                        p={8}
                        rounded="md"
                        boxShadow="md"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading size="lg" mb={6}>
                            Send Us a Message
                        </Heading>

                        <VStack gap={5} align="stretch">
                            <Box>
                                <Text mb={1} fontWeight="semibold">Full Name</Text>
                                <Input p="5px" placeholder="Your name" bg="white" size="lg" borderColor="gray.200" />
                            </Box>

                            <Box>
                                <Text mb={1} fontWeight="semibold">Email Address</Text>
                                <Input p="5px" type="email" placeholder="Your email" bg="white" size="lg" borderColor="gray.200" />
                            </Box>

                            <Box>
                                <Text mb={1} fontWeight="semibold">Phone Number</Text>
                                <Input p="5px" placeholder="Your phone number" bg="white" size="lg" borderColor="gray.200" />
                            </Box>

                            <Box>
                                <Text mb={1} fontWeight="semibold">Message</Text>
                                <Textarea
                                    p="5px"
                                    placeholder="Tell us about your land ownership goals..."
                                    bg="white"
                                    borderColor="gray.200"
                                    size="lg"
                                    minH="120px"
                                />
                            </Box>

                            <Button bg="#0B5BCC" color="white" size="lg" _hover={{ bg: "#0849a1" }}>
                                Send Message
                            </Button>
                        </VStack>
                    </MotionBox>

                    {/* Contact Information */}
                    <MotionVStack
                        align="stretch"
                        gap={6}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box>
                            <Heading size="lg" mb={2}>
                                Contact Information
                            </Heading>
                            <Text color="gray.600">
                                {"Reach out to us through any of the following channels. We're available Monday to Friday, 9 AM to 6 PM."}
                            </Text>
                        </Box>

                        <VStack align="stretch" gap={5}>
                            <MotionHStack align="center" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                <Circle size="10" bg="green.100" color="green.500">
                                    <Icon as={FaPhone} boxSize={5} />
                                </Circle>
                                <Box>
                                    <Text fontWeight="bold">Phone</Text>
                                    <Text color="gray.600">+234 800 123 4567</Text>
                                    <Text color="gray.600">+234 800 765 4321</Text>
                                </Box>
                            </MotionHStack>

                            <MotionHStack align="center" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                <Circle size="10" bg="yellow.100" color="yellow.600">
                                    <Icon as={FaEnvelope} boxSize={5} />
                                </Circle>
                                <Box>
                                    <Text fontWeight="bold">Email</Text>
                                    <Text color="gray.600">info@lendpay.com</Text>
                                    <Text color="gray.600">support@lendpay.com</Text>
                                </Box>
                            </MotionHStack>

                            <MotionHStack align="center" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                                <Circle size="10" bg="blue.100" color="blue.600">
                                    <Icon as={FaMapMarkerAlt} boxSize={5} />
                                </Circle>
                                <Box>
                                    <Text fontWeight="bold">Office</Text>
                                    <Text color="gray.600">123 Land Avenue, Victoria Island</Text>
                                    <Text color="gray.600">Lagos, Nigeria</Text>
                                </Box>
                            </MotionHStack>
                        </VStack>

                        <MotionBox
                            mt={4}
                            p={5}
                            bg={bgInfo}
                            rounded="md"
                            boxShadow="sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Heading size="sm" mb={2}>
                                Office Hours
                            </Heading>
                            <Text color="gray.700">Monday – Friday: 9:00 AM – 6:00 PM</Text>
                            <Text color="gray.700">Saturday: 10:00 AM – 3:00 PM</Text>
                            <Text color="gray.700">Sunday: Closed</Text>
                        </MotionBox>
                    </MotionVStack>
                </SimpleGrid>
            </Container>
        </NoAuthLayout>
    );
}
