import { UseMinicart } from "../../hooks/MinicartContext";
import { ProductsProps } from "../Product";
import { Container } from "./styles";

export function Quantity(props: { product: ProductsProps }) {
  const { updateQuantity } = UseMinicart();

  const decrement = (id: number, totalquantity: number) => {
    const infoQuantity = {
      id,
      quantity: (totalquantity -= 1),
    };

    updateQuantity(infoQuantity);
  };

  const increment = (id: number, totalquantity: number) => {
    const infoQuantity = {
      id,
      quantity: (totalquantity += 1),
    };

    updateQuantity(infoQuantity);
  };

  return (
    <Container>
      <button
        onClick={() => decrement(props.product.id, props.product.quantity)}
      >
        -
      </button>

      <input type="number" minLength={1} value={props.product?.quantity} />

      <button
        onClick={() => increment(props.product.id, props.product.quantity)}
      >
        +
      </button>
    </Container>
  );
}
