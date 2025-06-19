import { Heading, Radio, RadioGroup } from "@chakra-ui/react";
import { Payer } from "../hooks/usePayers";

interface Props {
  selectedPayer: Payer | null;
  selectedMiles: number;
  onSelectMode: (mode: string) => void;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ModeSelector = ({ selectedPayer, selectedMiles, onSelectMode }: Props) => {
  if (selectedPayer != null) {
    const modeKeys: string[] = Object.keys(selectedPayer.mode);
    if (selectedMiles <= 50) {
      return (
      <>
        <Heading className="selector" paddingBottom={3}>Mode</Heading>
        <RadioGroup className="selector" >
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
    } else {
      delete modeKeys[0];
      return (
        <>
          <Heading className="selector" paddingBottom={3}>Mode</Heading>
          <RadioGroup className="selector" >
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
    }} else {
    return <div></div>;
  }
};

export default ModeSelector;
