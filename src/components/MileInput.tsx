import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useRef } from "react";

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
          <Heading>
            {ref.current === null ? "Miles" : ref.current?.value + " Miles"}
          </Heading>
        </FormLabel>
        <Input ref={ref} type="number" width="auto" />
      </FormControl>
    </>
  );
};

export default MileInput;
