"use client";

import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import StatCard from "./StatCard";
import { cashFormat, cashFormat2 } from "@/utils/cashformat";
import { useSelector } from "react-redux";
import { sumUserAssets } from "@/utils/constants";

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
    const { wallet } = useSelector((a: { auth: { wallet: any } }) => a.auth)
    const { properties } = useSelector((a: { asset: { investment: any, properties: any } }) => a.asset)

    const shares = properties && properties.asset && properties.asset.length > 0.1 ? sumUserAssets(properties.asset) : { totalShares: 0, averagePercentage: 0 }

    const stats = [
        {
            title: "Total Invested",
            value: wallet && wallet.investment_balance ? cashFormat(wallet.investment_balance) : cashFormat(0),
            subtitle: `Across ${properties && properties.asset ? properties.asset.length : 0} land banks`,
            icon: "N",
        },
        {
            title: "Main Balance",
            value: wallet && wallet.withdrawal_balance  ? cashFormat(wallet.withdrawal_balance) : cashFormat(0),
            subtitle: wallet && wallet.payout ? cashFormat(wallet.payout) : cashFormat(0),
            icon: "graph",
            highlight: true,
        },
        {
            title: "Total Shares",
            value: cashFormat2(shares.totalShares),
            subtitle: `Across ${properties && properties.asset ? properties.asset.length : 0}  properties`,
            icon: "share",
        },
        {
            title: "Portfolio Returns",
            value: "+" + cashFormat2(shares.averagePercentage) + "%",
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
