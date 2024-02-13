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
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" size="lg" >
        <ModalOverlay
          bg="none"
          backdropFilter="blur(10px)"
          backdropInvert="10%"
        />
        <ModalContent padding={5}>
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
