import {
  TableContainer,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  InputGroup,
  Tfoot,
} from "@chakra-ui/react";
import { InputQuery } from "../../App";
import { useEffect } from "react";

interface Props {
  inputQuery: InputQuery;
}

const PrivateTable = ({ inputQuery }: Props) => {
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
    const fuelFee = 
      inputQuery.payer?.fuel_surcharge[
        inputQuery.fuelRange as keyof typeof inputQuery.payer.fuel
    ];
    const percentTotal = () => {
      let x = totalBeforePercent() * fuelFee;
      return parseFloat(x.toFixed(2))
    };

    let percentCell = document.getElementById("fuelSurcharge");
    percentCell != null
      ? (percentCell.innerHTML = "$" + percentTotal().toString())
      : null;

    let totalCell = document.getElementById("total");
    totalCell != null
      ? (totalCell.innerHTML =
          "$" + (percentTotal() + totalBeforePercent()).toString())
      : null;
  }, []);

  let payerMode =
    inputQuery.payer?.mode[
      inputQuery.mode as keyof typeof inputQuery.payer.mode
    ];

  const feePerMile = () => {
    if (inputQuery.payer != null) {
      let payermode =
        inputQuery.payer.mode[
          inputQuery.mode as keyof typeof inputQuery.payer.mode
        ];
      if (inputQuery.miles < 50) {
        return payermode.underfifty;
      } else if (inputQuery.miles < 100) {
        return payermode.underhundred;
      } else {
        return payermode.overhundred;
      }
    } else {
      console.log("no payer mode");
      return 0;
    }
  };

  const costPerMile = () => {
    return feePerMile() * inputQuery.miles;
  };

  //
  const oxygenMap: { [key: string]: string } = {
    one: "2-4 lpm O",
    two: "5-7 lpm O",
    three: "8+ lpm O",
  };
  const loadFee = payerMode?.load_fee;
  const oxygenFee =
    inputQuery.payer?.oxygen[
      inputQuery.oxygenRange as keyof typeof inputQuery.payer.oxygen
    ];
  const fuelMap: { [key: string]: string } = {
    over_3: "3%",
    over_4: "6%",
    over_5: "10%",
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple" id="privateTable" color="Black !important">
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
           { inputQuery.miles > 100 ? (
            <Tr className="row">
              <Th>Dry Mileage</Th>
              <Td>$1.00/{inputQuery.miles}mi</Td>
              <Td className="totalCell">${inputQuery.miles}</Td>
            </Tr>) : null}

            <Tr className="row">
              <Th>Load Fee ({inputQuery.mode})</Th>
              <Td>${loadFee}</Td>
              <Td className="totalCell">${loadFee}</Td>
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
                <Td>${oxygenFee}</Td>
                <Td className="totalCell">${oxygenFee}</Td>
              </Tr>
            ) : null}
            {inputQuery.isFuel ? (
              <Tr className="row">
                <Th>Fuel Surcharge</Th>
                <Td>{fuelMap[inputQuery.fuelRange]}</Td>
                <Td id="fuelSurcharge"></Td>
              </Tr>
            ) : null}
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

export default PrivateTable;
