import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import IconCart from "../../assets/cart.png";

import { useRef } from "react";
import { FooterMinicart, HeaderMinicart } from "./styles";
import { ProductMiniCart } from "./ProductMiniCart";

export function MiniCart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={btnRef} onClick={onOpen}>
        <img src={IconCart} alt="cart" />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <HeaderMinicart>
            <p>My shopping</p>
            <button onClick={onClose}>X</button>
          </HeaderMinicart>

          <DrawerBody>
            <ProductMiniCart />
          </DrawerBody>

          <FooterMinicart>
            <Button
              variant="outline"
              background="#00BFFF"
              color="#fff"
              _hover={{ color: "#000" }}
              onClick={onClose}
            >
              Keep buying
            </Button>
            <Button colorScheme="blue" _hover={{ color: "#000" }}>
              Checkout
            </Button>
          </FooterMinicart>
        </DrawerContent>
      </Drawer>
    </>
  );
}
