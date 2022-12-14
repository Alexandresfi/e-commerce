import { ProductResultSearch } from "./ProductResultSearch";

import { ContainerSearchResult, ContentProducts, Text } from "./styles";

export function SearchResult() {
  const searchText =
    localStorage.getItem("department:ecommerceDepartment") || " ";

  return (
    <ContainerSearchResult>
      <Text>Resultado para {searchText}</Text>
      <ContentProducts>
        <ProductResultSearch />
      </ContentProducts>
    </ContainerSearchResult>
  );
}
