import { ContainerHeader, ContentHeadert, ContainerSearch } from "./styles";

import IconLogo from "../../assets/logo.png";
import IconLogin from "../../assets/login.png";
import IconSearch from "../../assets/search.png";
import { ContainerTopBar } from "./TopBar";
import { HeaderMobile } from "./Mobile";
import { MiniCart } from "../Minicart";
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
              <input type="text" placeholder="Qual produto você procura?" />
              <button onClick={handleClick}>
                <img src={IconSearch} alt="search" />
              </button>
            </ContainerSearch>

            <div className="container">
              <img src={IconLogin} alt="login" onClick={handleClick} />

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
