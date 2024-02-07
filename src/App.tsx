import { useState } from "react";
import PayerSelctor from "./components/PayerSelector";
import { Payer } from "./hooks/usePayers";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";

export interface PayerQuery {
  payer: Payer | null;
}

function App() {
  const [payerQuery, setPayerQuery] = useState<PayerQuery>({} as PayerQuery);
  return (
    <Container
      padding={20}
      centerContent
      minW="100%"
      height="100vh"
      bg="orange.600"
    >
      <Card
        width={{ base: "100%", sm: "75%", md: "75%", lg: "50%" }}
        direction="row"
      >
        <CardHeader flex="">
          <PayerSelctor
            onSelectPayer={(payer) => setPayerQuery({ ...payerQuery, payer })}
            selectedPayer={payerQuery.payer}
          />
        </CardHeader>
        <CardBody>
          <Stack>
            <Box>
              <Heading></Heading>
            </Box>
            <Box>
              <Heading></Heading>
            </Box>
            <Box>
              <Heading></Heading>
            </Box>
            <Box>
              <Heading></Heading>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
