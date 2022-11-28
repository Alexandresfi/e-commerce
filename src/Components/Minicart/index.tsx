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
import { ButtonMinicart, FooterMinicart, HeaderMinicart } from "./styles";
import { ProductMiniCart } from "./ProductMiniCart";
import { UseMinicart } from "../../hooks/MinicartContext";

export function MiniCart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { products } = UseMinicart();

  return (
    <>
      <ButtonMinicart ref={btnRef} onClick={onOpen}>
        {products.length > 0 && (
          <span className="counter">{products.length}</span>
        )}

        <img src={IconCart} alt="cart" />
      </ButtonMinicart>

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
