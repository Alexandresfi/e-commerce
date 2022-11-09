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
  quantity: number;
}

export function Product(props: { require: string }) {
  const [productsAPI, setProductsAPI] = useState<ProductsProps[]>([]);
  const { addProductMinicart, updateQuantity, products } = UseMinicart();

  const GetProducts = async () => {
    const { data } = await api.get(props.require);
    setProductsAPI(data.products);
  };

  const handleClick = (product: ProductsProps) => {
    localStorage.getItem("ecommerceUser:userData")
      ? addMinicart(product)
      : alert("To make a purchase you need to be logged in.");
  };

  useEffect(() => {
    GetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsAPI.length]);

  const addMinicart = (product: ProductsProps) => {
    const index = products.findIndex((item) => item.id === product.id);
    console.log(index);
    if (index > 0) {
      const infoQuantity = {
        id: product.id,
        quantity: (product.quantity += 1),
      };
      updateQuantity(infoQuantity);
    } else {
      product.quantity = 1;
      addProductMinicart(product);
    }
  };

  return (
    <>
      {productsAPI?.map((product) => (
        <ContentProducts key={product.id}>
          <Img src={product.thumbnail} alt="" />
          <Title>{product.title}</Title>
          <ValueFrist>
            From <span>{formatPrices(product.price)}</span>
          </ValueFrist>
          <Price>
            For only {formatPrices(product.price - product.discountPercentage)}
          </Price>
          <BuyButton onClick={() => handleClick(product)}>Buy</BuyButton>
        </ContentProducts>
      ))}
    </>
  );
}
