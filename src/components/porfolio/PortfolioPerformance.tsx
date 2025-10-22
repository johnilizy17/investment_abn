import React from "react";
import {
    Box,
    Heading,
    Text
} from "@chakra-ui/react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    ChartOptions,
    ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const PortfolioPerformance: React.FC = () => {
    const cardBg = "white"
    const textColor = "gray.600"

    // Chart data
    const data: ChartData<"line"> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "ABN Estate",
                data: [-20, -10, 60, 20, 30, -40],
                borderColor: "#1E40AF", // Blue
                backgroundColor: "#1E40AF",
                tension: 0.4,
                fill: false,
                pointRadius: 5,
            },
            {
                label: "ABN Estate 2",
                data: [-10, -5, 6, 2, 15, -25],
                borderColor: "#2faf1eff", // Blue
                backgroundColor: "#2faf1eff",
                tension: 0.4,
                fill: false,
                pointRadius: 5,
            },
            {
                label: "ABN Estate (Alt)",
                data: [10, 20, -20, -60, -30, 10],
                borderColor: "#C026D3", // Pink
                backgroundColor: "#C026D3",
                tension: 0.4,
                fill: false,
                pointRadius: 5,
            },
        ],
    };

    // Chart options
    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    boxWidth: 10,
                    color: textColor,
                },
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: textColor },
            },
            y: {
                beginAtZero: true,
                grid: { color: "#E2E8F0" },
                ticks: { color: textColor },
            },
        },
    };

    return (
        <Box bg={cardBg} boxShadow={"md"} p={6} mt="30px" rounded="xl" shadow="sm">
            <Heading fontSize="md" mb={1}>
                Portfolio Performance Over Time
            </Heading>
            <Text fontSize="sm" color={textColor} mb={4}>
                Track how your investments have performed over the past months
            </Text>

            <Box>
                <Line data={data} options={options} />
            </Box>
        </Box>
    );
};

export default PortfolioPerformance;
