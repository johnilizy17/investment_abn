import { EmptyState } from "@/utils/EmptyState";
import { COLORS } from "@/utils/theme";
import {
  Table,
  Tag,
  Box,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { cashFormat, cashFormat2 } from "@/utils/cashformat"

export default function TransactionSingleTable() {
  const bg = "gray.800"
  const border = "gray.700"
  const { history } = useSelector((a: { auth: { history:any } }) => a.auth)

  return (
    <Box
      p={4}
      boxShadow="sm"
      overflowX="auto"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Recent Transactions
      </Text>

      <Table.Root variant="outline">
        <Table.Header mb="10px" bg={COLORS.blue}>
          <Table.Row>
            <Table.ColumnHeader p="20px" color={COLORS.white}>Date</Table.ColumnHeader>
            <Table.ColumnHeader p="20px" color={COLORS.white}>Property</Table.ColumnHeader>
            <Table.ColumnHeader p="20px" color={COLORS.white}>Type</Table.ColumnHeader>
            <Table.ColumnHeader p="20px" color={COLORS.white}>Amount</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {history && history.length > 0.1 ? history.map((tx: any) => (
            <Table.Row key={tx.id}>
              <Table.Cell p="20px">{tx.walletTransactions.created_at}</Table.Cell>
              <Table.Cell p="20px">{tx.investments ? tx.investments.title : "No Properties"}</Table.Cell>
              <Table.Cell p="20px" fontWeight="semibold">{tx.walletTransactions.type === 2 ? "Debit" : tx.walletTransactions.type === 1 ? "Credit" : "Transfer"}</Table.Cell>
              <Table.Cell color={tx.walletTransactions.type === 2 ? "red" : tx.walletTransactions.type === 1 ? "green" : "yellow"} p="20px" fontWeight="semibold">{cashFormat(tx.walletTransactions.amount)}</Table.Cell>
            </Table.Row>
          )) :
            <EmptyState title="no transactions" />
          }
        </Table.Body>
      </Table.Root >
    </Box >
  );
}
