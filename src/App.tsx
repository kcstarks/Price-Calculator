import { useState } from "react";
import PayerSelector from "./components/PayerSelector";
import MileInput from "./components/MileInput";
import { Payer } from "./hooks/usePayers";
import { Box, Container, Flex } from "@chakra-ui/react";
import ModeSelector from "./components/ModeSelector";
import OxygenSelector from "./components/OxygenSelector";
import WeekendSelector from "./components/WeekendSelector";
import BariSelector from "./components/BariSelector";
import PriceModal from "./components/PriceModal";
import FuelSelector from "./components/FuelSelector";

export interface InputQuery {
  payer: Payer | null;
  miles: number;
  mode: string;
  isOxygen: boolean;
  oxygenRange: string;
  weekend: boolean;
  bari: boolean;
  isFuel: boolean;
  fuelRange: string;
}

function App() {
  const [inputQuery, setInputQuery] = useState<InputQuery>({} as InputQuery);

  return (
    <Container
      padding={[0, 2, 2, 2]}
      paddingTop={[0, 8, 8, 8]}
      centerContent
      minW="100%"
    >
      <Flex
        width={{ base: "50%", sm: "75%", md: "75%", lg: "25%" }}
        direction="column"
        gap={10}
      >
        <Box>
          <PayerSelector
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
            selectedMiles={inputQuery.miles}
            onSelectMode={(mode) => setInputQuery({ ...inputQuery, mode })}
          />
        </Box>
        <Box>
          <BariSelector
            selectedPayer={inputQuery.payer}
            onSelectBari={(bari) => setInputQuery({ ...inputQuery, bari })}
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
            selectedMode={inputQuery.mode}
            selectedMiles={inputQuery.miles}
            setIsOxygen={(isOxygen) =>
              setInputQuery({ ...inputQuery, isOxygen })
            }
          />
        </Box>
        <Box>
          <FuelSelector
            selectedPayer={inputQuery.payer}
            onSelectFuel={(fuelRange) => setInputQuery({ ...inputQuery, fuelRange })}
            setIsFuel={(isFuel) => setInputQuery({ ...inputQuery, isFuel })}
          />
        </Box>

        <Box>
          <PriceModal inputQuery={inputQuery} />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
