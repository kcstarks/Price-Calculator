import { Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import usePayers, { Payer } from "../hooks/usePayers";

interface Props {
  onSelectPayer: (payer: Payer) => void;
  selectedPayer: Payer | null;
}

const PayerSelector = ({ onSelectPayer, selectedPayer }: Props) => {
  const { data } = usePayers();
  return (
    <>
      <RadioGroup>
        <Heading paddingBottom={5}>{selectedPayer?.name || "Payers"}</Heading>
        <Stack direction="row">
          {data.map((payer) => (
            <Radio
              paddingEnd={5}
size="lg"
              value={payer.name}
              key={payer.slug}
              onChange={() => onSelectPayer(payer)}
            >
              {payer.name}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </>
  );
};

export default PayerSelector;
