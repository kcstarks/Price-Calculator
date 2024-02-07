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
              colorScheme="DD6B20"
              size="lg"
              key={payer.slug}
              onClick={() => onSelectPayer(payer)}
              value={payer.name}
              fontWeight={
                payer.slug === selectedPayer?.slug ? "bold" : "normal"
              }
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
