import { Radio, RadioGroup } from "@chakra-ui/react";
import { Payer } from "../hooks/usePayers";

interface Props {
  selectedPayer: Payer | null;
  onSelectMode: (mode: string) => void;
}

const ModeSelector = ({ selectedPayer, onSelectMode }: Props) => {
  return (
    <>
      <RadioGroup>
        <Radio value="s">something</Radio>
      </RadioGroup>
    </>
  );
};

export default ModeSelector;
