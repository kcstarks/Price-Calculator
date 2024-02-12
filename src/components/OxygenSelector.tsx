import { Heading, Radio, RadioGroup } from "@chakra-ui/react";
import { Payer } from "../hooks/usePayers";
import { useState } from "react";

interface Props {
  selectedPayer: Payer | null;
  onSelectOxygen: (oxygenRange: string) => void;
}

const Oxygen = ({ selectedPayer, onSelectOxygen }: Props) => {
  const [isOxygen, setIsOxygen] = useState("false");

  const oxygenMap: { [key: string]: string } = {
    one: "2 - 4",
    two: "5 - 7",
    three: "8 +",
  };

  if (selectedPayer != null) {
    const oxygenKeys: string[] = Object.keys(selectedPayer.oxygen);

    if (isOxygen === "false") {
      return (
        <>
          <Heading paddingBottom={3}>Any oxygen?</Heading>
          <RadioGroup onChange={setIsOxygen} value={isOxygen}>
            <Radio value="true" paddingEnd={5}>
              Yes
            </Radio>
            <Radio value="false" paddingEnd={5}>
              No
            </Radio>
          </RadioGroup>
        </>
      );
    } else {
      return (
        <>
          <Heading paddingBottom={3}>How many liters?</Heading>
          <RadioGroup>
            {oxygenKeys.map((key) => (
              <Radio
                value={key}
                key={key}
                paddingEnd={5}
                onChange={() => onSelectOxygen(key)}
              >
                {oxygenMap[key]}
              </Radio>
            ))}
          </RadioGroup>
        </>
      );
    }
  } else null;
};

export default Oxygen;
