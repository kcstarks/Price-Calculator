import {
  FormEvent,
  FormEventHandler,
  RefObject,
  useRef,
  useState,
} from "react";
import PayerSelctor from "./components/PayerSelector";
import MileInput from "./components/MileInput";
import usePayers, { Payer } from "./hooks/usePayers";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { string } from "zod";

export interface InputQuery {
  payer: Payer | null;
  miles: number;
}

function App() {
  const [inputQuery, setInputQuery] = useState<InputQuery>({} as InputQuery);
  const [inputMiles, setInputMiles] = useState(0);

  const { data } = usePayers();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInputQuery({ ...inputQuery, miles: inputMiles });
    console.log(inputQuery.payer);
  };

  const handleMiles = (value: string) => {
    let parsedValue = parseInt(value);
    setInputMiles(parsedValue);
  };

  return (
    <Container
      padding={20}
      centerContent
      minW="100%"
      height="100vh"
      bg="orange.600"
    >
      <Flex
        width={{ base: "100%", sm: "75%", md: "75%", lg: "50%" }}
        direction="column"
        gap={5}
      >
        <Box>
          <PayerSelctor
            onSelectPayer={(payer) => setInputQuery({ ...inputQuery, payer })}
            selectedPayer={inputQuery.payer}
          />
        </Box>
        <Box>
          <MileInput
            onInputMiles={(miles) => setInputQuery({ ...inputQuery, miles })}
          />
        </Box>
        <Box>
          <Heading></Heading>
        </Box>
        <Box>
          <Heading></Heading>
        </Box>
        <Box>
          <Button onSubmit={(event) => handleSubmit}>Submit</Button>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
