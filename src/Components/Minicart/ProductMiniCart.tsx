import { UseMinicart } from "../../hooks/MinicartContext";
import {
  Container,
  ContainerDescription,
  ContainerImage,
  ContainerPrice,
  ContainerProduct,
  Description,
  Discount,
  Price,
  Quantity,
} from "./styles";

export function ProductMiniCart() {
  const { products, deleteProduct, updateQuantity } = UseMinicart();

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
      {products?.map((product) => (
        <ContainerProduct>
          <ContainerImage>
            <img src={product.thumbnail} alt="product" />
          </ContainerImage>

          <ContainerDescription>
            <Description>{product.title}</Description>

            <ContainerPrice>
              <Discount>$ {product.price}</Discount>

              <Price>$ {product.price - product.rating}</Price>
            </ContainerPrice>

            <Quantity>
              <button onClick={() => decrement(product.id, product.quantity)}>
                -
              </button>

              <input type="number" minLength={1} value={product.quantity} />

              <button onClick={() => increment(product.id, product.quantity)}>
                +
              </button>
            </Quantity>
          </ContainerDescription>
          <div className="closed">
            <button onClick={() => deleteProduct(product.id)}>x</button>
          </div>
        </ContainerProduct>
      ))}
    </Container>
  );
}
