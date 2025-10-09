"use client";

import React from "react";
import { Box, Text, Flex, Icon, Heading } from "@chakra-ui/react";
import {
  FaChartLine,
  FaWallet,
  FaShareAlt,
  FaLandmark,
  FaDollarSign,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
  icon: "N" | "graph" | "wallet" | "share" | "land";
  highlight?: boolean;
  isPositive?: boolean;
};

const iconMap: Record<StatCardProps["icon"], IconType> = {
  N: FaDollarSign,
  graph: FaChartLine,
  wallet: FaWallet,
  share: FaShareAlt,
  land: FaLandmark,
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  highlight,
  isPositive,
}) => {
  const IconComponent = iconMap[icon];

  return (
    <Box
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
      _hover={{ boxShadow: "md", transform: "translateY(-3px)" }}
      transition="all 0.2s ease-in-out"
    >
      <Flex justify="space-between" align="flex-start">
        <Box>
          <Text fontSize="sm" color="gray.500">
            {title}
          </Text>
          <Heading fontSize="2xl" fontWeight="700" mt={1}>
            {value}
          </Heading>
          <Text
            fontSize="sm"
            color={isPositive ? "green.500" : "gray.500"}
            mt={1}
          >
            {subtitle}
          </Text>
        </Box>

        <Flex
          bg={highlight ? "blue.50" : "gray.100"}
          borderRadius="full"
          w="40px"
          h="40px"
          justify="center"
          align="center"
        >
          <Icon
            as={IconComponent}
            color={highlight ? "blue.600" : "gray.500"}
            boxSize={5}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default StatCard;
