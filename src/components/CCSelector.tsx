import { Heading, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { Payer } from "../hooks/usePayers";

interface Props {
  selectedPayer: Payer | null;
  onSelectCC: (weeekend: boolean) => void;
}

const CCSelector = ({ selectedPayer, onSelectCC }: Props) => {
  const [isCC, setIsCC] = useState(false);
  if (selectedPayer != null) {
    return (
      <>
        <Heading className="selector" paddingBottom={3}>Credit Card Fee?</Heading>
        <RadioGroup
          onChange={(value) => setIsCC(JSON.parse(value))}
          value={isCC.toString()}
        >
          <Radio
            className="selector"
            value={true.toString()}
            onChange={() => onSelectCC(true)}
            paddingEnd={5}
          >
            Yes
          </Radio>
          <Radio value={false.toString()} onChange={() => onSelectCC(false)}>
            No
          </Radio>
        </RadioGroup>
      </>
    );
  } else {
    return <div> </div>;
  }
};

export default CCSelector;
