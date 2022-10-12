import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { formatPrices } from "../../utils/formatPrice";

import {
  BuyButton,
  ContentProducts,
  Img,
  Price,
  Title,
  ValueFrist,
} from "./styles";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  images: string[];
}

export function Product(props: { require: string }) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const GetProducts = async () => {
    const { data } = await api.get(props.require);
    setProducts(data.products);
  };

  const handleClick = () => {
    alert("Em breve estará disponível");
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <>
      {products?.map((product) => (
        <ContentProducts key={product.id}>
          <Img src={product.images[0]} alt="" />
          <Title>{product.title}</Title>
          <ValueFrist>
            de <span>{formatPrices(product.price)}</span>
          </ValueFrist>
          <Price>
            Por apenas{" "}
            {formatPrices(product.price - product.discountPercentage)}
          </Price>
          <BuyButton onClick={handleClick}>Comprar</BuyButton>
        </ContentProducts>
      ))}
    </>
  );
}
