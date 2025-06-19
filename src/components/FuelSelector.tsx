import { Heading, Radio, RadioGroup } from "@chakra-ui/react";
import { Payer } from "../hooks/usePayers";
import { useState } from "react";

interface Props {
  selectedPayer: Payer | null;
  onSelectFuel: (fuelRange: string) => void;
  setIsFuel: (isFuel: boolean) => void;
}

const Fuel = ({ selectedPayer, onSelectFuel, setIsFuel }: Props) => {
  const [fuel, setFuel] = useState("false");

  const fuelMap: { [key: string]: string } = {
    over_3: "3%",
    over_4: "6%",
    over_5: "10%",
  };

  if (selectedPayer != null) {
    const fuelKeys: string[] = Object.keys(selectedPayer.fuel_surcharge);

    if (fuel === "false") {
      return (
        <>
          <Heading className="selector" paddingBottom={3}>Fuel Surcharge?</Heading>
          <RadioGroup
            className="selector"
            onChange={(value) => setFuel(JSON.parse(value))}
            value={fuel.toString()}
          >
            <Radio
              value={true.toString()}
              paddingEnd={5}
              onChange={() => setIsFuel(true)}
            >
              Yes
            </Radio>
            <Radio
              value={false.toString()}
              onChange={() => setIsFuel(false)}
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
          <Heading paddingBottom={3}>Fuel Surcharge?</Heading>
          <RadioGroup>
            {fuelKeys.map((key) => (
              <Radio
                value={key}
                key={key}
                paddingEnd={5}
                onChange={() => onSelectFuel(key)}
              >
                {fuelMap[key]}
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

export default Fuel;
