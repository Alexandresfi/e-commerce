import { ContainerHeader, ContentHeadert } from "./styles";

import IconLogo from "../../assets/logo.png";
import { ContainerTopBar } from "./TopBar";
import { HeaderMobile } from "./Mobile";
import { MiniCart } from "../../Components/Minicart";
import { Login } from "../../Components/Modal";
import { useSizeScreen } from "../../hooks/UseSizeScreen";
import { Search } from "../../Components/Search";

export function Header() {
  const size = useSizeScreen();
  const lg = 913;

  const toggleLayout = () => {
    if (size.width > lg) {
      return (
        <ContentHeadert>
          <a href="/#">
            <img src={IconLogo} alt="logo" />
          </a>

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
