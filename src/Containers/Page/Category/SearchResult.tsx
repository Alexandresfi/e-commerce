import { Product } from "../../../Components/Product";

import { ContainerSearchResult } from "./styles";

export function SearchResult() {
  const searchText =
    localStorage.getItem("department:ecommerceDepartment") || " ";

  return (
    <ContainerSearchResult>
      <Product require={JSON.parse(searchText)} search />
    </ContainerSearchResult>
  );
}
