import { ProductPdpdProps } from "../..";
import { BuyButton } from "../../../../../Components/BuyButton";
import { formatPrices } from "../../../../../utils/formatPrice";
import {
  OldPrice,
  Price,
  Title,
  Container,
  TitleSimilar,
  ProductSimilar,
  ColorSimilar,
  ContainerColorSimilar,
  SKUVariation,
} from "./styles";

export function ContainerInfoPDP(props: { product: ProductPdpdProps }) {
  return (
    <Container>
      <Title>{props.product?.title}</Title>

      <Price>
        {formatPrices(props.product?.price - props.product?.rating)}
      </Price>

      <OldPrice>{formatPrices(props.product?.price)}</OldPrice>

      <div style={{ marginTop: "1rem" }}>
        <TitleSimilar>Colors</TitleSimilar>
        <ProductSimilar>
          <ContainerColorSimilar>
            <ColorSimilar color="red" />
          </ContainerColorSimilar>

          <ContainerColorSimilar>
            <ColorSimilar color="blue" />
          </ContainerColorSimilar>

          <ContainerColorSimilar>
            <ColorSimilar color="#00ffff" />
          </ContainerColorSimilar>

          <ContainerColorSimilar>
            <ColorSimilar color="black" />
          </ContainerColorSimilar>
        </ProductSimilar>
      </div>

      <div style={{ margin: "1rem 0" }}>
        <TitleSimilar>Sizes</TitleSimilar>
        <ProductSimilar>
          <SKUVariation> small </SKUVariation>
          <SKUVariation> medium </SKUVariation>
          <SKUVariation> normal </SKUVariation>
          <SKUVariation> big </SKUVariation>
        </ProductSimilar>
      </div>

      <BuyButton product={props.product} />
    </Container>
  );
}

//http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=70002900&sCepDestino=04547000&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nlndicaCalculo=3
