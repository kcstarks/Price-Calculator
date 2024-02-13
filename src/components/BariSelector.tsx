import { Heading, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { Payer } from "../hooks/usePayers";

interface Props {
  selectedPayer: Payer | null;
  onSelectBari: (weeekend: boolean) => void;
}

const BariSelector = ({ selectedPayer, onSelectBari }: Props) => {
  const [isBari, setIsBari] = useState(false);
  if (selectedPayer != null) {
    return (
      <>
        <Heading paddingBottom={3}>Bariatric Fee?</Heading>
        <RadioGroup
          onChange={(value) => setIsBari(JSON.parse(value))}
          value={isBari.toString()}
        >
          <Radio
            value={true.toString()}
            onChange={() => onSelectBari(true)}
            paddingEnd={5}
          >
            Bariactric Fee
          </Radio>
          <Radio value={false.toString()} onChange={() => onSelectBari(false)}>
            Non-Bariatric
          </Radio>
        </RadioGroup>
      </>
    );
  } else {
    return <div>Bariatric Selector not found</div>;
  }
};

export default BariSelector;
