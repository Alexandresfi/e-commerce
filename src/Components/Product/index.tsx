import { useEffect, useState } from "react";
import { UseMinicart } from "../../hooks/MinicartContext";

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

export interface ProductsProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  quantity?: number;
}

export function Product(props: { require: string }) {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const { addProductMinicart } = UseMinicart();

  const GetProducts = async () => {
    const { data } = await api.get(props.require);
    setProducts(data.products);
  };

  const handleClick = (product: ProductsProps) => {
    localStorage.getItem("ecommerceUser:userData")
      ? addMinicart(product)
      : alert("To make a purchase you need to be logged in.");
  };

  useEffect(() => {
    GetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length]);

  const addMinicart = (product: ProductsProps) => {
    product.quantity = 1;
    addProductMinicart(product);
  };

  return (
    <>
      {products?.map((product) => (
        <ContentProducts key={product.id}>
          <Img src={product.thumbnail} alt="" />
          <Title>{product.title}</Title>
          <ValueFrist>
            de <span>{formatPrices(product.price)}</span>
          </ValueFrist>
          <Price>
            Por apenas{" "}
            {formatPrices(product.price - product.discountPercentage)}
          </Price>
          <BuyButton onClick={() => handleClick(product)}>Buy</BuyButton>
        </ContentProducts>
      ))}
    </>
  );
}
