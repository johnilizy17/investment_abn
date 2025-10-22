"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Select,
  Button,
  Table,
  Tag,
  Text,
  Portal,
  TableRoot,
  TableHeader,
  TableBody,
  TableRow,
  TableColumnHeader,
  TableCell,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const transactions = [
  { id: "TXN-001", date: "2024-03-15", property: "Riverside Estate - Plot A3", type: "Purchase", amount: "$46,000", payment: "Bank Transfer", status: "Completed" },
  { id: "TXN-002", date: "2024-03-14", property: "Mountain View - Plot B7", type: "Investment", amount: "$32,800", payment: "Credit Card", status: "Failed" },
  { id: "TXN-003", date: "2024-03-13", property: "Coastal Paradise - Plot C2", type: "Purchase", amount: "$68,000", payment: "Bank Transfer", status: "Processing" },
  { id: "TXN-004", date: "2024-03-12", property: "Urban Heights - Plot D5", type: "Sale", amount: "$52,000", payment: "Wire Transfer", status: "Completed" },
  { id: "TXN-005", date: "2024-03-11", property: "Green Valley - Plot E1", type: "Investment", amount: "$34,200", payment: "Bank Transfer", status: "Processing" },
  { id: "TXN-006", date: "2024-03-10", property: "Sunset Hills - Plot F9", type: "Purchase", amount: "$41,500", payment: "Credit Card", status: "Completed" },
];

const statusColor = {
  Completed: "green",
  Processing: "orange",
  Failed: "red",
};

export default function TransactionHistory() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredData = transactions.filter((txn) => {
    const matchSearch =
      txn.property.toLowerCase().includes(search.toLowerCase()) ||
      txn.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || txn.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <Box p={6} bg="white" rounded="xl" shadow="sm" overflowX="auto">
      <Flex justify="space-between" align="center" mb={4} flexWrap="wrap" gap={3}>
        <Text fontSize="lg" fontWeight="bold">
          Transaction History
        </Text>

        <Flex gap={3} flexWrap="wrap">
          <Input
            placeholder="Search by property or transaction ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            width="280px"
          />

          {/* <Select.Root onChange={(e: any) => setStatusFilter(e.target.value)} width="160px">

          </Select.Root> */}

          <Button colorScheme="teal">
            <FaDownload /> Export
          </Button>
        </Flex>
      </Flex>

      <Table.Root size="md" >
        <Table.Header bg="gray.50">
          <Table.Row>
            <Table.ColumnHeader>Transaction ID</Table.ColumnHeader>
            <Table.ColumnHeader>Date</Table.ColumnHeader>
            <Table.ColumnHeader>Property</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Amount</Table.ColumnHeader>
            <Table.ColumnHeader>Payment Method</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredData.map((txn) => (
            <Table.Row key={txn.id}>
              <Table.Cell>{txn.id}</Table.Cell>
              <Table.Cell>{txn.date}</Table.Cell>
              <Table.Cell>{txn.property}</Table.Cell>
              <Table.Cell>
                <Tag.Root colorScheme="blue" variant="subtle">
                  <Tag.Label>
                    {txn.type}
                  </Tag.Label>
                </Tag.Root>
              </Table.Cell>
              <Table.Cell fontWeight="medium">{txn.amount}</Table.Cell>
              <Table.Cell>{txn.payment}</Table.Cell>
              <Table.Cell>
                <Tag.Root>
                  <Tag.Label>{txn.status}</Tag.Label>
                </Tag.Root>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}