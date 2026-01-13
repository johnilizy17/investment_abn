import React from "react";
import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    Stack,
    HStack,
    VStack,
    Icon,
    Badge,
    Image,
    Circle,
    List,
    ListItem,
    chakra,
} from "@chakra-ui/react";
import {
    FaShieldAlt,
    FaGlobe,
    FaChartLine,
    FaRegHandshake,
    FaCheck,
    FaUsers,
    FaUniversity,
    FaDollarSign,
    FaAccessibleIcon,
} from "react-icons/fa";
import NoAuthLayout from "@/layout/NoAuthLayout";
import Navbar from "@/components/landingpage/LandingPageHeader";
import { COLORS } from "@/utils/theme";
import { motion } from "framer-motion";

const MotionBox = motion(Box as any);
const MotionVStack = motion(VStack as any);
const MotionFlex = motion(Flex as any);
const MotionHStack = motion(HStack as any);

// Replace with the correct path to the background image in your project
const BG_IMAGE = "/Background.png";

const StatCard = ({ label, value, index }: any) => (
    <MotionBox
        borderWidth={1}
        borderRadius="md"
        p={6}
        bg={COLORS.whitesmoke}
        boxShadow="sm"
        textAlign="center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Heading size="md" color={COLORS.blue}>
            {value}
        </Heading>
        <Text fontSize="sm" color="gray.500" mt={2}>
            {label}
        </Text>
    </MotionBox>
);

const ValueCard = ({ icon, title, children, index }: { icon: any, title: any, children: any, index: number }) => (
    <MotionBox
        borderWidth={1}
        borderRadius="md"
        p={6}
        bg={COLORS.whitesmoke}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ translateY: -5, boxShadow: "lg" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
    >
        <HStack gap={4} display={["block", "flex"]} align="start">
            <Circle size="12" bg={COLORS.light_white} color={COLORS.blue}>
                <Icon as={icon} boxSize={6} />
            </Circle>
            <VStack align="start" gap={1}>
                <Heading size="sm">{title}</Heading>
                <Text fontSize="sm" color="gray.500">
                    {children}
                </Text>
            </VStack>
        </HStack>
    </MotionBox>
);

export default function AboutPage() {
    return (
        <NoAuthLayout title="About Us - ABN Narionhs Land Bank">
            <Navbar />
            <Box mt="80px">
                {/* Hero */}
                <MotionFlex
                    minH={{ base: "220px", md: "260px" }}
                    align="center"
                    justify="center"
                    color="white"
                    px={4}
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
                            <Heading as="h1" size="2xl" color={COLORS.blue} textAlign="center">
                                About Us
                            </Heading>
                            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" textAlign="center" maxW="3xl">
                                {"We're democratizing land investment by making it accessible, transparent, and profitable for everyone through fractional ownership."}
                            </Text>
                        </MotionVStack>
                    </Container>
                </MotionFlex>

                <Container px={10}>
                    {/* Stats */}
                    <SimpleGrid w="full" columns={{ base: 2, md: 4 }} gap={6} mb={8}>
                        <StatCard index={0} value="10,000+" label="Active Investors" />
                        <StatCard index={1} value="150+" label="Land Banks" />
                        <StatCard index={2} value="N50M+" label="Total Investment" />
                        <StatCard index={3} value="40.5%" label="Average ROI" />
                    </SimpleGrid>

                    {/* Mission */}
                    <MotionBox
                        borderWidth={1}
                        w="full"
                        borderRadius="md"
                        p={6}
                        mb={10}
                        bgGradient="linear(to-r, #ffffff, #fff9f4)"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <HStack gap={4} display={["block", "flex"]} alignItems="start">
                            <Box>
                                <Circle size="12" bg="#EAF3FF" color={COLORS.blue}>
                                    <Icon as={FaRegHandshake} boxSize={6} />
                                </Circle>
                            </Box>
                            <Box>
                                <Heading size="md">Our Mission</Heading>
                                <Text color="gray.600" mt={2}>
                                    At ABN Narionhs Land Bank, we believe that land ownership should be accessible to everyone, not just
                                    the privileged few. Our mission is to break down the barriers to land investment by offering
                                    fractional ownership opportunities that are transparent, secure, and profitable. We combine
                                    cutting-edge technology with traditional land banking to create a modern investment platform that
                                    serves retail investors, young professionals, and anyone seeking tangible, asset-backed
                                    investments.
                                </Text>
                            </Box>
                        </HStack>
                    </MotionBox>

                    {/* Core Values */}
                    <MotionBox
                        textAlign="center"
                        mb={6}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Heading size="lg">Our Core Values</Heading>
                    </MotionBox>

                    <SimpleGrid columns={{ base: 1, md: 4 }} gap={6} mb={10}>
                        <ValueCard index={0} icon={FaShieldAlt} title="Transparency">
                            Full disclosure of all investment opportunities with clear documentation and legal frameworks.
                        </ValueCard>

                        <ValueCard index={1} icon={FaAccessibleIcon} title="Accessibility">
                            Making land investment accessible to everyone through fractional ownership.
                        </ValueCard>

                        <ValueCard index={2} icon={FaChartLine} title="Growth">
                            Focused on sustainable appreciation and long-term value creation.
                        </ValueCard>

                        <ValueCard index={3} icon={FaGlobe} title="Sustainability">
                            Committed to ethical investments that benefit communities and the environment.
                        </ValueCard>
                    </SimpleGrid>

                    {/* How We Work */}

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                        <MotionBox
                            borderWidth={1}
                            borderRadius="md"
                            p={6}
                            mb={10}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Heading size="md" mb={4}>
                                How We Work
                            </Heading>

                            <Box>
                                <List.Root gap={6}>
                                    {[
                                        { title: "Careful Selection", text: "We identify high-potential land parcels in strategic locations with strong growth prospects." },
                                        { title: "Legal Framework", text: "Each Land Bank is structured with complete legal compliance and clear ownership documentation." },
                                        { title: "Fractional Ownership", text: "We divide ownership into affordable shares, making land investment accessible to all." },
                                        { title: "Growth & Returns", text: "As land values appreciate, so does your investment, with transparent tracking and reporting." }
                                    ].map((item, idx) => (
                                        <ListItem key={idx}>
                                            <MotionHStack
                                                alignItems="start"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.15 }}
                                            >
                                                <Circle size="8" bg="#EAF3FF" color={COLORS.blue}>
                                                    <Text fontWeight={700}>{idx + 1}</Text>
                                                </Circle>
                                                <Box>
                                                    <Heading size="sm">{item.title}</Heading>
                                                    <Text fontSize="sm" color="gray.500">
                                                        {item.text}
                                                    </Text>
                                                </Box>
                                            </MotionHStack>
                                        </ListItem>
                                    ))}
                                </List.Root>
                            </Box>
                        </MotionBox>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Box
                                borderWidth={1}
                                borderRadius="md"
                                p={8}
                                height="100%"
                                bgGradient="linear(to-br, rgba(10,60,140,0.03), rgba(255,240,230,0.03))"
                            >
                                <VStack gap={4} align="center">
                                    <Icon boxSize={10} color={COLORS.blue} >
                                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M41.2719 34.3733L45.3119 57.1093C45.3572 57.377 45.3196 57.6522 45.2043 57.898C45.0889 58.1438 44.9013 58.3485 44.6664 58.4847C44.4316 58.621 44.1607 58.6823 43.8901 58.6605C43.6195 58.6387 43.3619 58.5348 43.1519 58.3626L33.6053 51.1973C33.1444 50.853 32.5846 50.6669 32.0093 50.6669C31.434 50.6669 30.8741 50.853 30.4133 51.1973L20.8506 58.36C20.6408 58.5318 20.3836 58.6355 20.1133 58.6574C19.843 58.6793 19.5724 58.6182 19.3377 58.4823C19.103 58.3464 18.9153 58.1422 18.7997 57.8968C18.6841 57.6515 18.646 57.3768 18.6906 57.1093L22.7279 34.3733" stroke="#0054AD" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M32 37.3333C40.8366 37.3333 48 30.1698 48 21.3333C48 12.4967 40.8366 5.33325 32 5.33325C23.1634 5.33325 16 12.4967 16 21.3333C16 30.1698 23.1634 37.3333 32 37.3333Z" stroke="#0054AD" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Icon>
                                    <Heading size="md" color={COLORS.blue}>Built on Trust</Heading>
                                    <Text textAlign="center" color="gray.600">
                                        Every Land Bank on our platform undergoes rigorous due diligence. We provide complete
                                        transparency with legal documentation, audit reports, and regular updates so you can invest with
                                        confidence.
                                    </Text>
                                </VStack>
                            </Box>
                        </MotionBox>
                    </SimpleGrid>

                </Container>
            </Box>
        </NoAuthLayout >
    );
}
