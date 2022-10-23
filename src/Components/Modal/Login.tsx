import { useRef } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

import IconLogin from "../../assets/login.png";
import { ContainerWarning } from "./styles";

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <button onClick={onOpen}>
        <img src={IconLogin} alt="login" />
      </button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log into my account</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First name"
                borderColor="#000"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Your Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                borderColor="#000"
              />
            </FormControl>

            <ContainerWarning>
              <p>
                Use Name: <span>kminchelle</span>{" "}
              </p>

              <p>
                Use Password: <span>0lelplR</span>{" "}
              </p>
            </ContainerWarning>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Log in
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
