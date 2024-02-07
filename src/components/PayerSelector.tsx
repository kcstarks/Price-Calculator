import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePayers, { Payer } from "../hooks/usePayers";

interface Props {
  onSelectPayer: (payer: Payer) => void;
  selectedPayer: Payer | null;
}

const PayerSelector = ({ onSelectPayer, selectedPayer }: Props) => {
  const { data } = usePayers();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPayer?.name || "Payers"}
      </MenuButton>
      <MenuList>
        {data.map((payer) => (
          <MenuItem
            key={payer.slug}
            onClick={() => onSelectPayer(payer)}
            fontWeight={payer.slug === selectedPayer?.slug ? "bold" : "normal"}
          >
            {payer.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PayerSelector;
