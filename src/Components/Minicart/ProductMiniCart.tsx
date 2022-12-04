import { UseMinicart } from "../../hooks/MinicartContext";
import { Quantity } from "../Quantity";
import {
  Container,
  ContainerDescription,
  ContainerImage,
  ContainerPrice,
  ContainerProduct,
  Description,
  Discount,
  Price,
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

            <Quantity product={product!} />
          </ContainerDescription>
          <div className="closed">
            <button onClick={() => deleteProduct(product.id)}>x</button>
          </div>
        </ContainerProduct>
      ))}
    </Container>
  );
}
