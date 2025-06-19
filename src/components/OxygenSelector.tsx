import { Heading, Radio, RadioGroup } from "@chakra-ui/react";
import { Payer } from "../hooks/usePayers";
import { useState } from "react";

interface Props {
  selectedPayer: Payer | null;
  selectedMode: string;
  selectedMiles: number;
  onSelectOxygen: (oxygenRange: string) => void;
  setIsOxygen: (isOxygen: boolean) => void;
}

const Oxygen = ({ selectedPayer, selectedMode, selectedMiles, onSelectOxygen, setIsOxygen }: Props) => {
  const [oxygen, setOxygen] = useState("false");

  const oxygenMap: { [key: string]: string } = {
    one: "2 - 4",
    two: "5 - 7",
    three: "8 +",
  };

  if (selectedPayer != null && selectedMode != 'taxi') {
    const oxygenKeys: string[] = Object.keys(selectedPayer.oxygen);

    if (oxygen === "false") {
      return (
        <>
          <Heading className="selector" paddingBottom={3}>Any oxygen?</Heading>
          <RadioGroup
            className="selector"
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
  } else {
    return <div> </div>
  }
};

export default Oxygen;
