import { useNavigate } from "react-router-dom";
import { UseMinicart } from "../../hooks/MinicartContext";
import { formatPrices } from "../../utils/formatPrice";
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
  const navigate = useNavigate();

  const handleLink = (id: number) => {
    localStorage.setItem("product:IdPdp", JSON.stringify(id));
    navigate("pdp");
  };

  return (
    <Container>
      {products?.map((product) => (
        <ContainerProduct>
          <ContainerImage>
            <img
              src={product.thumbnail}
              alt="product"
              onClick={() => handleLink(product.id)}
            />
          </ContainerImage>

          <ContainerDescription>
            <Description onClick={() => handleLink(product.id)}>
              {product.title}
            </Description>

            <ContainerPrice>
              <Discount>{formatPrices(product.price)}</Discount>

              <Price>{formatPrices(product.price - product.rating)}</Price>
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
