import { useState } from "react";
import PayerSelctor from "./components/PayerSelector";
import MileInput from "./components/MileInput";
import { Payer } from "./hooks/usePayers";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import ModeSelector from "./components/ModeSelector";
import OxygenSelector from "./components/OxygenSelector";
import PrivateTable from "./components/tables/PrivateTable";
import ContractTable from "./components/tables/ContractTable";
import WeekendSelector from "./components/WeekendSelector";

export interface InputQuery {
  payer: Payer | null;
  miles: number;
  mode: string;
  oxygenRange: string;
  weekend: boolean;
}

function App() {
  const [inputQuery, setInputQuery] = useState<InputQuery>({} as InputQuery);
  const [isSubmit, setIsSubmit] = useState(false);

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
          <WeekendSelector
            selectedPayer={inputQuery.payer}
            onSelectWeekend={(weekend) =>
              setInputQuery({ ...inputQuery, weekend })
            }
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
          <Button onChange={() => setIsSubmit(true)}>Submit</Button>
        </Box>
      </Flex>
      <Flex>
        {isSubmit ? (
          inputQuery.payer?.name === "Private" ? (
            <PrivateTable inputQuery={inputQuery} />
          ) : (
            <ContractTable inputQuery={inputQuery} />
          )
        ) : null}
      </Flex>
    </Container>
  );
}

export default App;
