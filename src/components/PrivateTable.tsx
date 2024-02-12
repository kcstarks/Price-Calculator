import { TableContainer, Thead, Th, Tbody, Tr } from "@chakra-ui/react";
import { Table } from "react-bootstrap-icons";

const PrivateTable = () => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Th>Category</Th>
          <Th>Rate</Th>
          <Th>Total</Th>
        </Thead>
        <Tbody>
          <Tr></Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PrivateTable;
