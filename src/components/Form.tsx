import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { number, z } from "zod";
import payers from "../local-json/payers.json";

const schema = z.object({
  miles: z.number().min(100).max(1_000),
  mode: z.string().min(2).max(15),
});

interface Props {
  name: string;
  mode_fee: { string: number };
  bari: number;
  oxygen: { string: number };
}

const Form = ({ name, mode_fee, bari, oxygen }: Props) => {
  return (
    <FormControl display="flex-stretch" padding={20}>
      <HStack paddingBottom={5}>
        <FormLabel>Payer</FormLabel>
        <Select placeholder="Select payer">
          {payers.map(({ name }) => (
            <option key={name}>{name}</option>
          ))}
        </Select>
        <Button>Add payer</Button>
      </HStack>

      <HStack paddingBottom={5}>
        <FormLabel>Miles</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>

      <HStack>
        <FormLabel>Mode</FormLabel>
        <Input id="mode"></Input>
      </HStack>
    </FormControl>
  );
};

export default Form;
