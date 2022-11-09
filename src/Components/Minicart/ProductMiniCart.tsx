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
  const { products, deleteProduct } = UseMinicart();
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
              <p>-</p>
              <input type="number" minLength={1} value={product.quantity} />
              <p>+</p>
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
