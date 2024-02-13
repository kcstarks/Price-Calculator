import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { InputQuery } from "../../App";

interface Props {
  inputQuery: InputQuery;
}

const ContractTable = ({ inputQuery }: Props) => {
  useEffect(() => {
    function getSum(total: number, num: number) {
      return total + num;
    }
    const totalBeforePercent = () => {
      let item = document.getElementsByClassName("totalCell");
      let totalList: number[] = [];
      for (let i = 0; i < item.length; i++) {
        let itemContent = item[i].lastChild?.textContent;
        if (itemContent != null) {
          totalList.push(parseFloat(itemContent));
        }
      }
      return totalList.reduce(getSum, 0);
    };

    /* const percentTotal = () => {
      return totalBeforePercent() * 0.06;
    };

    let percentCell = document.getElementById("sixPercent");
    percentCell != null
      ? (percentCell.innerHTML = "$" + percentTotal().toString())
      : null;*/

    let totalCell = document.getElementById("total");
    totalCell != null
      ? (totalCell.innerHTML =
          "$" + /*percentTotal() +*/ totalBeforePercent().toString())
      : null;
  }, []);

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
  const modePrice =
    inputQuery.payer?.load_fee[
      inputQuery.mode as keyof typeof inputQuery.payer.load_fee
    ];
  const oxygenPrice =
    inputQuery.payer?.oxygen[
      inputQuery.oxygenRange as keyof typeof inputQuery.payer.oxygen
    ];

  return (
    <>
      <TableContainer>
        <Table variant="simple" id="privateTable">
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Rate</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody id="tableBody">
            <Tr className="row">
              <Th>Miles({inputQuery.miles})</Th>
              <Td>${feePerMile()}/mi</Td>
              <Td className="totalCell">${costPerMile()}</Td>
            </Tr>
            <Tr className="row">
              <Th>Dry Mileage</Th>
              <Td>$1.00/{inputQuery.miles}mi</Td>
              <Td className="totalCell">${inputQuery.miles}</Td>
            </Tr>
            <Tr className="row">
              <Th>Load Fee ({inputQuery.mode})</Th>
              <Td>${modePrice}</Td>
              <Td className="totalCell">${modePrice}</Td>
            </Tr>
            {inputQuery.bari ? (
              <Tr className="row">
                <Th>Bariatric</Th>
                <Td>${inputQuery.payer?.bari}</Td>
                <Td className="totalCell">${inputQuery.payer?.bari}</Td>
              </Tr>
            ) : null}
            {inputQuery.weekend ? (
              <Tr className="row">
                <Th>Weekend Fee</Th>
                <Td>${inputQuery.payer?.weekend_fee}</Td>
                <Td className="totalCell">${inputQuery.payer?.weekend_fee}</Td>
              </Tr>
            ) : null}
            {inputQuery.isOxygen ? (
              <Tr className="row">
                <Th>
                  {oxygenMap[inputQuery.oxygenRange]}
                  <sub>2</sub>
                </Th>
                <Td>${oxygenPrice}</Td>
                <Td className="totalCell">${oxygenPrice}</Td>
              </Tr>
            ) : null}
            {/*<Tr className="row">
              <Th>Fuel Surcharge</Th>
              <Td>6%</Td>
              <Td id="sixPercent"></Td>
            </Tr>*/}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th>Total</Th>
              <Td id="total"></Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContractTable;
