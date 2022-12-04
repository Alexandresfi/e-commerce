import { ProductPdpdProps } from "../..";
import { BuyButton } from "../../../../../Components/BuyButton";
import { Price } from "../../../../../Components/Minicart/styles";
import { Title, ValueFrist } from "../../../../../Components/Product/styles";
import { Quantity } from "../../../../../Components/Quantity";
import { formatPrices } from "../../../../../utils/formatPrice";
import { ContainerPricePDP } from "./styles";

export function ContainerInfoPDP(props: { product: ProductPdpdProps }) {
  return (
    <div>
      <Title>{props.product?.title}</Title>

      <ContainerPricePDP>
        <ValueFrist>
          <span>{formatPrices(props.product?.price)}</span>
        </ValueFrist>
        <Price>
          {formatPrices(props.product?.price - props.product?.rating)}
        </Price>
      </ContainerPricePDP>

      <div>
        <Quantity product={props.product} />
        <BuyButton product={props.product!} />
      </div>
      <div>Frete</div>
    </div>
  );
}
