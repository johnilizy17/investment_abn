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

// Replace with the correct path to the background image in your project
const BG_IMAGE = "/Background.png";

const StatCard = ({ label, value }: any) => (
    <Box
        borderWidth={1}
        borderRadius="md"
        p={6}
        bg={COLORS.whitesmoke}
        boxShadow="sm"
        textAlign="center"
    >
        <Heading size="md" color={COLORS.blue}>
            {value}
        </Heading>
        <Text fontSize="sm" color="gray.500" mt={2}>
            {label}
        </Text>
    </Box>
);

const ValueCard = ({ icon, title, children }: { icon: any, title: any, children: any }) => (
    <Box borderWidth={1} borderRadius="md" p={6} bg={COLORS.whitesmoke}>
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
    </Box>
);

export default function AboutPage() {
    return (
        <NoAuthLayout title="About Us - ABN Narionhs Land Bank">
            <Navbar />
            <Box mt="80px">
                {/* Hero */}
                <Flex
                    minH={{ base: "220px", md: "260px" }}
                    align="center"
                    justify="center"
                    color="white"
                    px={4}
                >
                    <Container maxW="6xl" py={{ base: 8, md: 12 }}>
                        <VStack gap={3} bg="rgba(255,255,255,0.0)">
                            <Heading as="h1" size="2xl" color={COLORS.blue} textAlign="center">
                                About Us
                            </Heading>
                            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" textAlign="center" maxW="3xl">
                             {"We're democratizing land investment by making it accessible, transparent, and profitable for everyone through fractional ownership."}
                            </Text>
                        </VStack>
                    </Container>
                </Flex>

                <Container px={10}>
                    {/* Stats */}
                    <SimpleGrid w="full" columns={{ base: 2, md: 4 }} gap={6} mb={8}>
                        <StatCard value="10,000+" label="Active Investors" />
                        <StatCard value="150+" label="Land Banks" />
                        <StatCard value="N50M+" label="Total Investment" />
                        <StatCard value="40.5%" label="Average ROI" />
                    </SimpleGrid>

                    {/* Mission */}
                    <Box borderWidth={1} w="full" borderRadius="md" p={6} mb={10} bgGradient="linear(to-r, #ffffff, #fff9f4)">
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
                    </Box>

                    {/* Core Values */}
                    <Box textAlign="center" mb={6}>
                        <Heading size="lg">Our Core Values</Heading>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 4 }} gap={6} mb={10}>
                        <ValueCard icon={FaShieldAlt} title="Transparency">
                            Full disclosure of all investment opportunities with clear documentation and legal frameworks.
                        </ValueCard>

                        <ValueCard icon={FaAccessibleIcon} title="Accessibility">
                            Making land investment accessible to everyone through fractional ownership.
                        </ValueCard>

                        <ValueCard icon={FaChartLine} title="Growth">
                            Focused on sustainable appreciation and long-term value creation.
                        </ValueCard>

                        <ValueCard icon={FaGlobe} title="Sustainability">
                            Committed to ethical investments that benefit communities and the environment.
                        </ValueCard>
                    </SimpleGrid>

                    {/* How We Work */}

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                        <Box borderWidth={1} borderRadius="md" p={6} mb={10}>
                            <Heading size="md" mb={4}>
                                How We Work
                            </Heading>

                            <Box>
                                <List.Root gap={6}>
                                    <ListItem>
                                        <HStack alignItems="start">
                                            <Circle size="8" bg="#EAF3FF" color={COLORS.blue}>
                                                <Text fontWeight={700}>1</Text>
                                            </Circle>
                                            <Box>
                                                <Heading size="sm">Careful Selection</Heading>
                                                <Text fontSize="sm" color="gray.500">
                                                    We identify high-potential land parcels in strategic locations with strong growth prospects.
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </ListItem>

                                    <ListItem>
                                        <HStack alignItems="start">
                                            <Circle size="8" bg="#EAF3FF" color={COLORS.blue}>
                                                <Text fontWeight={700}>2</Text>
                                            </Circle>
                                            <Box>
                                                <Heading size="sm">Legal Framework</Heading>
                                                <Text fontSize="sm" color="gray.500">
                                                    Each Land Bank is structured with complete legal compliance and clear ownership documentation.
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </ListItem>

                                    <ListItem>
                                        <HStack alignItems="start">
                                            <Circle size="8" bg="#EAF3FF" color={COLORS.blue}>
                                                <Text fontWeight={700}>3</Text>
                                            </Circle>
                                            <Box>
                                                <Heading size="sm">Fractional Ownership</Heading>
                                                <Text fontSize="sm" color="gray.500">
                                                    We divide ownership into affordable shares, making land investment accessible to all.
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </ListItem>

                                    <ListItem>
                                        <HStack alignItems="start">
                                            <Circle size="8" bg="#EAF3FF" color={COLORS.blue}>
                                                <Text fontWeight={700}>4</Text>
                                            </Circle>
                                            <Box>
                                                <Heading size="sm">Growth & Returns</Heading>
                                                <Text fontSize="sm" color="gray.500">
                                                    As land values appreciate, so does your investment, with transparent tracking and reporting.
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </ListItem>
                                </List.Root>
                            </Box>
                        </Box>
                        <Box>
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
                        </Box>
                    </SimpleGrid>

                </Container>
            </Box>
        </NoAuthLayout >
    );
}
