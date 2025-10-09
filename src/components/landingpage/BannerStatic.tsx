import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export default function BannerStatic() {
  const direction = useBreakpointValue({ base: "column", md: "row" });

  const stats = [
    { number: "$2.4M+", label: "Total Invested" },
    { number: "1,250+", label: "Active Investors" },
    { number: "45", label: "Land Projects" },
    { number: "12.3%", label: "Avg. Annual Return" },
  ];

  return (
    <Box
      py={{ base: 6, md: 8 }}
      px={4}
      w="full"
      color="#fff"
    >
      <Flex
        direction={direction}
        justify="space-around"
        align="center"
        gap={{ base: 6, md: 0 }}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="whiteAlpha.400"
        py={4}
        textAlign="center"
      >
        {stats.map((item, index) => (
          <Box key={index}>
            <Text fontSize={{ base: "2xl", md: "3xl" }} mb={"5px"} fontWeight="bold">
              {item.number}
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{item.label}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
