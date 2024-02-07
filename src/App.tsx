import { useState } from "react";
import PayerSelctor from "./components/PayerSelector";
import { Payer } from "./hooks/usePayers";

export interface PayerQuery {
  payer: Payer | null;
}

function App() {
  const [payerQuery, setPayerQuery] = useState<PayerQuery>({} as PayerQuery);
  return (
    <PayerSelctor
      onSelectPayer={(payer) => setPayerQuery({ ...payerQuery, payer })}
      selectedPayer={payerQuery.payer}
    />
  );
}

export default App;
