import { TableContainer, Thead, Th, Tbody, Tr, Td } from "@chakra-ui/react";
import { Table } from "react-bootstrap-icons";
import { InputQuery } from "../../App";

interface Props {
  inputQuery: InputQuery;
}

const PrivateTable = ({ inputQuery }: Props) => {
  const feePerMile = () => {
    if (inputQuery.mode === "ambulatory" || "wheelchair") {
      if (inputQuery.miles < 50) {
        return 3.5;
      } else if (inputQuery.miles < 100) {
        return 4.5;
      } else {
        return 5.5;
      }
    } else {
      if (inputQuery.miles < 50) {
        return 5.5;
      } else if (inputQuery.miles < 100) {
        return 6.5;
      } else {
        return 8.0;
      }
    }
  };

  const costPerMile = () => {
    return feePerMile() * inputQuery.miles;
  };

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Th>Category</Th>
          <Th>Rate</Th>
          <Th>Total</Th>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Miles({inputQuery.miles})</Td>
            <Td>${feePerMile()}/mi</Td>
            <Td>{}</Td>
          </Tr>
          <Tr>
            <Td>Dry Mileage</Td>
            <Td>$1.00/{inputQuery.miles}</Td>
            <Td>{costPerMile()}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PrivateTable;
