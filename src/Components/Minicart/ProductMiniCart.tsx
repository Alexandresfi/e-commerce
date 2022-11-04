import {
  ContainerImage,
  ContainerPrice,
  ContainerProduct,
  Description,
  Discount,
  Price,
  Quantity,
} from "./styles";

export function ProductMiniCart() {
  return (
    <ContainerProduct>
      <ContainerImage>
        <img
          src="https://lojaqueroquero.vtexassets.com/arquivos/ids/2414208-1200-auto?v=637946834454400000&width=1200&height=auto&aspect=true"
          alt=" image product"
        />
      </ContainerImage>

      <div>
        <Description>
          Nome do produto com limitação de linhas e tamanho.
        </Description>

        <ContainerPrice>
          <Discount>$ 2 500</Discount>

          <Price>$ 2 000</Price>
        </ContainerPrice>

        <Quantity>
          <p>-</p>
          <input type="number" minLength={1} value={1} />
          <p>+</p>
        </Quantity>
      </div>

      <div className="closed">
        <p>x</p>
      </div>
    </ContainerProduct>
  );
}
