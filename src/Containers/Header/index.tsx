import { ContainerHeader, ContentHeadert } from "./styles";

import IconLogo from "../../assets/logo.png";
import { ContainerTopBar } from "./TopBar";
import { HeaderMobile } from "./Mobile";
import { MiniCart } from "../../Components/Minicart";
import { Login } from "../../Components/Modal";
import { useSizeScreen } from "../../hooks/UseSizeScreen";
import { Search } from "../../Components/Search";
import { Link } from "react-router-dom";

export function Header() {
  const size = useSizeScreen();
  const lg = 913; // tamanho da tela

  const toggleLayout = () => {
    if (size.width > lg) {
      return (
        <ContentHeadert>
          <Link to="/">
            <img src={IconLogo} alt="logo" />
          </Link>

          <Search />

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
