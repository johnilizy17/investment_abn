"use client";

import { COLORS } from "@/utils/theme";
import { Box, Grid, GridItem, Heading, Text, Icon } from "@chakra-ui/react";
import { FaUsers, FaLandmark, FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function BannerChoose() {
  const features = [
    {
      title: "Fractional Ownership",
      desc: "Invest in land without buying entire properties. Start with as little as $100.",
      icon: FaLandmark,
    },
    {
      title: "Land Value Appreciation",
      desc: "Benefit from long-term land value growth and potential development opportunities.",
      icon: FaChartLine,
    },
    {
      title: "Transparent and Secure",
      desc: "Full transparency with legal documentation and secure blockchain-based transactions.",
      icon: FaShieldAlt,
    },
    {
      title: "Community Driven",
      desc: "Join a community of investors and participate in collective land ownership decisions.",
      icon: FaUsers,
    },
  ];

  return (
    <Box bg="gray.50" py={16} px={6}>
      {/* Section Heading */}
      <Box textAlign="center" mb={12}>
        <Heading size="lg" mb={2}>
          Why Choose Land Banking
        </Heading>
        <Text color="gray.600">
          Land Banking offers unique advantages for building long-term wealth
        </Text>
      </Box>

      {/* Feature Grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        maxW="6xl"
        mx="auto"
      >
        {features.map((feature, idx) => (
          <GridItem
            key={idx}
            bg="white"
            p={6}
            rounded="xl"
            shadow="md"
            maxW={"422px"}
            border="1px solid"
            borderColor="gray.100"
            _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
            transition="all 0.2s"
          >
            <Box display="flex" alignItems="center" mb={4}>
              <Icon as={feature.icon} w={6} h={6} color="blue.500" mr={3} />
              <Heading fontSize={["16px","20px"]} fontWeight={"500"}>{feature.title}</Heading>
            </Box>
            <Text color={COLORS.gray} fontSize={["12px","16px"]} fontWeight={"400"}>{feature.desc}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
