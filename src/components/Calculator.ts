import { InputQuery } from "../App";
import { Payer } from "../hooks/usePayers";

interface Props<InputQuery> {
  payer: Payer | null;
  miles: number;
  mode: string;
  oxygenRange: string;
}

const Calculator = ({ payer }: Props<InputQuery>) => {
  return payer;
};

export default Calculator;
