import { ContainerSearch } from "./styles";
import IconSearch from "../../assets/search.png";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UseResultSearch } from "../../hooks/ResultSearch";

export function Search() {
  const refInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { GetSearch } = UseResultSearch();

  const handleSearch = () => {
    if (refInput.current?.value === " " || refInput.current?.value === "") {
      alert("The field is empty, please enter what you are looking for");
    } else {
      GetSearch(refInput.current?.value!);
      navigate("/search-result");
    }
  };

  return (
    <ContainerSearch>
      <input
        type="text"
        placeholder="which product are you looking for?"
        ref={refInput}
      />
      <button onClick={handleSearch}>
        <img src={IconSearch} alt="search" />
      </button>
    </ContainerSearch>
  );
}
