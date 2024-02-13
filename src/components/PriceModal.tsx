import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { InputQuery } from "../App";
import PrivateTable from "./tables/PrivateTable";
import ContractTable from "./tables/ContractTable";

interface Props {
  inputQuery: InputQuery;
}

const PriceModal = ({ inputQuery }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Calculate</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={2}>
            {inputQuery.payer?.name === "Private" ? (
              <PrivateTable inputQuery={inputQuery} />
            ) : (
              <ContractTable inputQuery={inputQuery} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PriceModal;
