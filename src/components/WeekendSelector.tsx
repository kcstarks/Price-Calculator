import { Heading, Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import { Payer } from "../hooks/usePayers";

interface Props {
  selectedPayer: Payer | null;
  onSelectWeekend: (weeekend: boolean) => void;
}

const WeekendSelector = ({ onSelectWeekend, selectedPayer }: Props) => {
  const [isWeekend, setIsWeekend] = useState(false);
  if (selectedPayer != null) {
    return (
      <>
        <Heading paddingBottom={3}>Weekend Fee?</Heading>
        <RadioGroup
          onChange={(value) => setIsWeekend(JSON.parse(value))}
          value={isWeekend.toString()}
        >
          <Radio
            value={true.toString()}
            onChange={() => onSelectWeekend(true)}
            paddingEnd={5}
          >
            Weekend Fee
          </Radio>
          <Radio
            value={false.toString()}
            onChange={() => onSelectWeekend(false)}
          >
            Week Day
          </Radio>
        </RadioGroup>
      </>
    );
  } else return <div> </div>;
};

export default WeekendSelector;
