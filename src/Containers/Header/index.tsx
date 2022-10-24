import { ContainerHeader, ContentHeadert, ContainerSearch } from "./styles";

import IconLogo from "../../assets/logo.png";
import IconSearch from "../../assets/search.png";
import { ContainerTopBar } from "./TopBar";
import { HeaderMobile } from "./Mobile";
import { MiniCart } from "../../Components/Minicart";
import { Login } from "../../Components/Modal";
// import { useEffect } from "react";

export function Header() {
  const handleClick = () => {
    alert("Em breve estará disponível");
  };

  let sizeScreen = window.screen.width;

  return (
    <header>
      <ContainerTopBar />

      {sizeScreen > 913 ? (
        <ContainerHeader>
          <ContentHeadert>
            <a href="/#">
              <img src={IconLogo} alt="logo" />
            </a>

            <ContainerSearch>
              <input
                type="text"
                placeholder="which product are you looking for?"
              />
              <button onClick={handleClick}>
                <img src={IconSearch} alt="search" />
              </button>
            </ContainerSearch>

            <div className="container">
              <Login />

              <MiniCart />
            </div>
          </ContentHeadert>
        </ContainerHeader>
      ) : (
        <HeaderMobile />
      )}
    </header>
  );
}
