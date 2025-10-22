import { Box, Center, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export default function BannerStatic() {
  const direction = useBreakpointValue({ base: "column", md: "row" });

  const stats = [
    { number: "₦2.4M+", label: "Total Invested" },
    { number: "1,250+", label: "Active Investors" },
    { number: "45", label: "Land Projects" },
    { number: "12.3%", label: "Avg. Annual Return" },
  ];

  return (
    <Center
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
        py={4}
        w="full"
        maxW="711px"
        textAlign="center"
      >
        {stats.map((item, index) => (
          <Box key={index}>
            <Text fontSize="16px" mb={"5px"} fontWeight="700">
              {item.number}
            </Text>
            <Text fontSize={"13px"} fontWeight={"400"}>{item.label}</Text>
          </Box>
        ))}
      </Flex>
    </Center>
  );
}
