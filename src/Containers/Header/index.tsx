import { ContainerHeader, ContentHeadert, ContainerSearch } from "./styles";

import IconLogo from "../../assets/logo.png";
import IconSearch from "../../assets/search.png";
import { ContainerTopBar } from "./TopBar";
import { HeaderMobile } from "./Mobile";
import { MiniCart } from "../../Components/Minicart";
import { Login } from "../../Components/Modal";
import { useSizeScreen } from "../../hooks/UseSizeScreen";
// import { useEffect } from "react";

export function Header() {
  const size = useSizeScreen();
  const lg = 913;

  const handleClick = () => {
    alert("Will be available soon");
  };

  const toggleLayout = () => {
    if (size.width > lg) {
      return (
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
      );
    } else {
      return <HeaderMobile />;
    }
  };

  return (
    <header>
      <ContainerTopBar />
      <ContainerHeader>{toggleLayout()}</ContainerHeader>
    </header>
  );
}
