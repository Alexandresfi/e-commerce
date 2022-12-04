import { UseMinicart } from "../../hooks/MinicartContext";
import { ProductsProps } from "../Product";
import { Button } from "./styles";

export function BuyButton(props: { product: ProductsProps }) {
  const { addProductMinicart, updateQuantity, products } = UseMinicart();

  const addMinicart = (product: ProductsProps) => {
    const index = products.findIndex((item) => item.id === product.id);
    console.log(index);
    if (index > 0) {
      const infoQuantity = {
        id: product.id,
        quantity: (product.quantity += 1),
      };
      updateQuantity(infoQuantity);
    } else {
      product.quantity = 1;
      addProductMinicart(product);
    }
  };

  const handleClick = (product: ProductsProps) => {
    localStorage.getItem("ecommerceUser:userData")
      ? addMinicart(product)
      : alert("To make a purchase you need to be logged in.");
  };

  return <Button onClick={() => handleClick(props.product)}>Buy</Button>;
}
