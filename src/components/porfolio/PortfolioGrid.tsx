"use client";

import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import StatCard from "./StatCard";

type Stat = {
    title: string;
    value: string | number;
    subtitle: string;
    icon: "N" | "graph" | "wallet" | "share" | "land";
    highlight?: boolean;
    isPositive?: boolean;
};

interface PortfolioGridProps {
    stats: Stat[];
}

const PortfolioGrid = ({ stats }: any) => {
    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} gap={6} w="full">
            {stats.map((stat: any, idx: any) => (
                <StatCard key={idx} {...stat} />
            ))}
        </SimpleGrid>
    );
};

export default PortfolioGrid;
