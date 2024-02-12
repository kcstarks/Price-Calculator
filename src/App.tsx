import { useState } from "react";
import PayerSelctor from "./components/PayerSelector";
import MileInput from "./components/MileInput";
import { Payer } from "./hooks/usePayers";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import Oxygen from "./components/OxygenSelector";
import ModeSelector from "./components/ModeSelector";
import OxygenSelector from "./components/OxygenSelector";

export interface InputQuery {
  payer: Payer | null;
  miles: number;
  mode: string;
  oxygenRange: string;
}

function App() {
  const [inputQuery, setInputQuery] = useState<InputQuery>({} as InputQuery);

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
          <ModeSelector
            selectedPayer={inputQuery.payer}
            onSelectMode={(mode) => setInputQuery({ ...inputQuery, mode })}
          />
        </Box>
        <Box>
          <OxygenSelector
            selectedPayer={inputQuery.payer}
            onSelectOxygen={(oxygenRange) =>
              setInputQuery({ ...inputQuery, oxygenRange })
            }
          />
        </Box>
        <Box>
          <Button>Submit</Button>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
