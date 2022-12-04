import { ProductPdpdProps } from "../..";
import { BuyButton } from "../../../../../Components/BuyButton";
import { formatPrices } from "../../../../../utils/formatPrice";
import { OldPrice, Price, Title, Container } from "./styles";

export function ContainerInfoPDP(props: { product: ProductPdpdProps }) {
  return (
    <Container>
      <Title>{props.product?.title}</Title>

      <OldPrice>{formatPrices(props.product?.price)}</OldPrice>

      <Price>
        {formatPrices(props.product?.price - props.product?.rating)}
      </Price>

      <BuyButton product={props.product} />
      <div>Frete</div>
    </Container>
  );
}
