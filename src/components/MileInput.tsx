import { FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { RefObject, useRef } from "react";

interface Props {
  onInputMiles: (miles: number) => void;
}

const MileInput = ({ onInputMiles }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <FormControl
        id="milesForm"
        onChange={(event) => {
          event.preventDefault();
          if (ref.current) onInputMiles(parseInt(ref.current.value));
        }}
      >
        <FormLabel>
          {ref.current === null ? "Miles" : ref.current?.value + " Miles"}
        </FormLabel>
        <Input ref={ref} type="number" />
      </FormControl>
    </>
  );
};

export default MileInput;
