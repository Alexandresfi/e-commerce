import IconLogo from "../../assets/logo.png";

import { Container, ContainerMobile } from "./styles";
import { MiniCart } from "../../Components/Minicart";
import { Login } from "../../Components/Modal";
import { Search } from "../../Components/Search";

export function HeaderMobile() {
  return (
    <Container>
      <ContainerMobile>
        <li>
          <Login />
        </li>

        <li>
          <a href="/#">
            <img src={IconLogo} alt="logo" />
          </a>
        </li>

        <li>
          <button>
            <MiniCart />
          </button>
        </li>
      </ContainerMobile>
      <Search />
    </Container>
  );
}
