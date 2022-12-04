import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { formatPrices } from "../../utils/formatPrice";
import { BuyButton } from "../BuyButton";

import { ContentProducts, Img, Price, Title, ValueFrist } from "./styles";

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
  const navigate = useNavigate();

  const GetProducts = async () => {
    const { data } = await api.get(props.require);
    setProductsAPI(data.products);
  };

  useEffect(() => {
    GetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsAPI.length]);

  const handleLink = (id: number) => {
    localStorage.setItem("product:IdPdp", JSON.stringify(id));
    navigate("pdp");
  };

  return (
    <>
      {productsAPI?.map((product) => (
        <ContentProducts key={product.id}>
          <Img
            src={product.thumbnail}
            onClick={() => handleLink(product.id)}
            alt={product.title}
          />
          <Title>{product.title}</Title>
          <ValueFrist>
            From <span>{formatPrices(product.price)}</span>
          </ValueFrist>
          <Price>
            For only {formatPrices(product.price - product.discountPercentage)}
          </Price>
          <BuyButton product={product!} />
        </ContentProducts>
      ))}
    </>
  );
}
