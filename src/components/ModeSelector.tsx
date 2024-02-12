import { Heading, Radio, RadioGroup } from "@chakra-ui/react";
import { Payer } from "../hooks/usePayers";

interface Props {
  selectedPayer: Payer | null;
  onSelectMode: (mode: string) => void;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ModeSelector = ({ selectedPayer, onSelectMode }: Props) => {
  if (selectedPayer != null) {
    const modeKeys: string[] = Object.keys(selectedPayer.load_fee);
    return (
      <>
        <Heading paddingBottom={3}>How many liters?</Heading>
        <RadioGroup>
          {modeKeys.map((key) => (
            <Radio
              value={key}
              key={key}
              paddingEnd={5}
              onChange={() => onSelectMode(key)}
            >
              {capitalize(key)}
            </Radio>
          ))}
        </RadioGroup>
      </>
    );
  }
};

export default ModeSelector;
