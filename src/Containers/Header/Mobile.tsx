import IconLogo from "../../assets/logo.png";
import IconSearch from "../../assets/search.png";

import { Container, ContainerMobile, ContainerSearch } from "./styles";
import { MiniCart } from "../../Components/Minicart";
import { Login } from "../../Components/Modal/Login";

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

      <ContainerSearch>
        <input type="text" placeholder="which product are you looking for?" />
        <button>
          <img src={IconSearch} alt="search" />
        </button>
      </ContainerSearch>
    </Container>
  );
}
