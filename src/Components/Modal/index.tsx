import { useRef, useState, useEffect } from "react";
import { UserData, UserDataProps } from "../../hooks/UserContext";

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
import { Avatar, ContainerWarning } from "./styles";

import { api } from "../../services/api";

interface ClientData {
  userName: string | number;
  password: string | number;
}

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loadUser, userData, logout } = UserData();

  const [infoData, setInfoData] = useState<UserDataProps>();
  const [infoClient, setInfoClient] = useState<ClientData>({
    userName: " ",
    password: " ",
  });

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const handleChandeName = (name: string | number) => {
    setInfoClient({ ...infoClient, userName: name });
  };

  const handleChandePassWord = (name: string | number) => {
    setInfoClient({ ...infoClient, password: name });
  };

  const userLogin = async (clientData: ClientData) => {
    const { data, status } = await api.post("/auth/login", {
      username: clientData.userName,
      password: clientData.password,
    });

    if (status === 200) {
      loadUser(data);
      setInfoData(data);
      onClose();
    }
  };

  const GetInfoUserData = async () => {
    const infoData = await localStorage.getItem("ecommerceUser:userData");

    if (infoData) {
      setInfoData(JSON.parse(infoData));
    }
  };

  const UserLogout = () => {
    logout();
    window.location.reload();
  };

  useEffect(() => {
    GetInfoUserData();
  }, [userData]);

  return (
    <>
      <button onClick={onOpen}>
        <Avatar
          src={infoData?.image ? infoData?.image : IconLogin}
          alt="login"
          loged={infoData?.image === "https://robohash.org/autquiaut.png"}
        />
      </button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          {infoData?.token ? (
            <ModalHeader>My account</ModalHeader>
          ) : (
            <ModalHeader>Log into my account</ModalHeader>
          )}

          {!infoData?.token ? (
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  ref={initialRef}
                  focusBorderColor="#000"
                  placeholder="First name"
                  borderColor="#000"
                  onChange={(e) => handleChandeName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Your Password</FormLabel>
                <Input
                  type="password"
                  focusBorderColor="#000"
                  placeholder="Password"
                  borderColor="#000"
                  onChange={(e) => handleChandePassWord(e.target.value)}
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
          ) : null}

          <ModalFooter>
            {!infoData?.token && (
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => userLogin(infoClient)}
                disabled={
                  infoClient.userName !== "kminchelle" ||
                  infoClient.password !== "0lelplR"
                }
              >
                Log in
              </Button>
            )}

            {infoData?.token ? (
              <Button
                onClick={() => {
                  UserLogout();
                  onClose();
                }}
              >
                log out
              </Button>
            ) : (
              <Button onClick={onClose}>Cancel</Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
