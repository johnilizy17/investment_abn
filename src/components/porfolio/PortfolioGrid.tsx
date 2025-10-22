"use client";

import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import StatCard from "./StatCard";
import { cashFormat } from "@/utils/cashformat";

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

const PortfolioGrid = () => {
    const stats = [
        {
            title: "Total Invested",
            value: cashFormat("15750"),
            subtitle: "Across 8 land banks",
            icon: "N",
        },
        {
            title: "Current Value",
            value: cashFormat("17210"),
            subtitle: "+$1,460 (9.3%)",
            icon: "graph",
            highlight: true,
        },
        {
            title: "Total Shares",
            value: "127",
            subtitle: "Across 8 properties",
            icon: "share",
        },
        {
            title: "Portfolio Returns",
            value: "+9.4",
            subtitle: "Annualized returns",
            icon: "wallet",
            isPositive: true,
        },
    ];

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} gap={6} w="full">
            {stats.map((stat: any, idx: any) => (
                <StatCard key={idx} {...stat} />
            ))}
        </SimpleGrid>
    );
};

export default PortfolioGrid;
