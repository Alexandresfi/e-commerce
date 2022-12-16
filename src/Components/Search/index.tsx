import { ContainerSearch } from "./styles";
import IconSearch from "../../assets/search.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseResultSearch } from "../../hooks/ResultSearch";

export function Search() {
  const [valueInput, setValueInput] = useState(" ");
  const navigate = useNavigate();
  const { GetSearch } = UseResultSearch();

  const handleSearch = () => {
    if (valueInput === " " || valueInput === "") {
      alert("The field is empty, please enter what you are looking for");
    } else {
      GetSearch(valueInput);
      setValueInput(" ");
      navigate("/search-result");
    }
  };

  const handleChangeText = (value: string) => {
    setValueInput(value);
  };

  return (
    <ContainerSearch>
      <input
        type="text"
        placeholder="which product are you looking for?"
        onChange={(e) => handleChangeText(e.target.value)}
      />
      <button onClick={handleSearch}>
        <img src={IconSearch} alt="search" />
      </button>
    </ContainerSearch>
  );
}
