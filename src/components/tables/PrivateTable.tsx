import {
  TableContainer,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  InputGroup,
} from "@chakra-ui/react";
import { InputQuery } from "../../App";

interface Props {
  inputQuery: InputQuery;
}

const PrivateTable = ({ inputQuery }: Props) => {
  const feePerMile = () => {
    if (inputQuery.mode === "ambulatory" || inputQuery.mode === "wheelchair") {
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

  const oxygenMap: { [key: string]: string } = {
    one: "2-4 lpm O",
    two: "5-7 lpm O",
    three: "8+ lpm O",
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Rate</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Miles({inputQuery.miles})</Td>
              <Td>${feePerMile()}/mi</Td>
              <Td>${costPerMile()}</Td>
            </Tr>
            <Tr>
              <Td>Dry Mileage</Td>
              <Td>$1.00/{inputQuery.miles}</Td>
              <Td>${inputQuery.miles}</Td>
            </Tr>
            <Tr>
              <Td>Load Fee ({inputQuery.mode})</Td>
              <Td>${inputQuery.payer?.load_fee[inputQuery.mode]}</Td>
              <Td>${inputQuery.payer?.load_fee[inputQuery.mode]}</Td>
            </Tr>
            {inputQuery.bari ? (
              <Tr>
                <Td>Bariatric</Td>
                <Td>${inputQuery.payer?.bari}</Td>
                <Td>${inputQuery.payer?.bari}</Td>
              </Tr>
            ) : null}
            {inputQuery.weekend ? (
              <Tr>
                <Td>Weekend Fee</Td>
                <Td>${inputQuery.payer?.weekend_fee}</Td>
                <Td>${inputQuery.payer?.weekend_fee}</Td>
              </Tr>
            ) : null}
            {inputQuery.isOxygen ? (
              <Tr>
                <Td>
                  {oxygenMap[inputQuery.oxygenRange]}
                  <sub>2</sub>
                </Td>
                <Td>${inputQuery.payer?.oxygen[inputQuery.oxygenRange]}</Td>
                <Td>${inputQuery.payer?.oxygen[inputQuery.oxygenRange]}</Td>
              </Tr>
            ) : null}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PrivateTable;
