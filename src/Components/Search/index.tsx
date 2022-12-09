import { ContainerSearch } from "./styles";
import IconSearch from "../../assets/search.png";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Search() {
  const refInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    localStorage.setItem(
      "department:ecommerceDepartment",
      JSON.stringify(refInput.current?.value)
    );
    navigate("/search-result");
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
