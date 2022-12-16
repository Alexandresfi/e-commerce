import { useEffect, useState } from "react";
import { Shelf } from "../../../Components/Shelf";
import { UseResultSearch } from "../../../hooks/ResultSearch";
import { ProductResultSearch } from "./ProductResultSearch";

import {
  ContainerSearchResult,
  ContentProducts,
  Text,
  TitleResult,
} from "./styles";

export function SearchResult() {
  const { searchText, products } = UseResultSearch();
  const [text, setText] = useState(" ");

  useEffect(() => {
    setText(searchText);
  }, [searchText]);

  const toogleResultSearch = () => {
    if (products.length < 1) {
      return (
        <>
          <TitleResult>
            We currently do not have this product, please check what you wrote.{" "}
          </TitleResult>
          <Shelf
            require="products/category/womens-watches?limit=10"
            titles="Womens watches"
          />
        </>
      );
    } else {
      return <ProductResultSearch />;
    }
  };

  return (
    <ContainerSearchResult>
      <Text>
        Resultado para <span>"{text}"</span>{" "}
      </Text>
      <ContentProducts>{toogleResultSearch()}</ContentProducts>
    </ContainerSearchResult>
  );
}
