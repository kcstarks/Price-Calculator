import { Heading, Radio, RadioGroup } from "@chakra-ui/react";
import { Payer } from "../hooks/usePayers";
import { useState } from "react";

interface Props {
  selectedPayer: Payer | null;
  onSelectOxygen: (oxygenRange: string) => void;
  setIsOxygen: (isOxygen: boolean) => void;
}

const Oxygen = ({ selectedPayer, onSelectOxygen, setIsOxygen }: Props) => {
  const [oxygen, setOxygen] = useState("false");

  const oxygenMap: { [key: string]: string } = {
    one: "2 - 4",
    two: "5 - 7",
    three: "8 +",
  };

  if (selectedPayer != null) {
    const oxygenKeys: string[] = Object.keys(selectedPayer.oxygen);

    if (oxygen === "false") {
      return (
        <>
          <Heading paddingBottom={3}>Any oxygen?</Heading>
          <RadioGroup
            onChange={(value) => setOxygen(JSON.parse(value))}
            value={oxygen.toString()}
          >
            <Radio
              value={true.toString()}
              paddingEnd={5}
              onChange={() => setIsOxygen(true)}
            >
              Yes
            </Radio>
            <Radio
              value={false.toString()}
              onChange={() => setIsOxygen(false)}
              paddingEnd={5}
            >
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
