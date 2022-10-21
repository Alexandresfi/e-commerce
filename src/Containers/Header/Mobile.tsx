import IconLogin from "../../assets/login.png";
import IconLogo from "../../assets/logo.png";
import IconSearch from "../../assets/search.png";

import { Container, ContainerMobile, ContainerSearch } from "./styles";
import { MiniCart } from "../Minicart";

export function HeaderMobile() {
  return (
    <Container>
      <ContainerMobile>
        <li>
          <button>
            <img src={IconLogin} alt="login" />
          </button>
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
        <input type="text" placeholder="Qual produto você procura?" />
        <button>
          <img src={IconSearch} alt="search" />
        </button>
      </ContainerSearch>
    </Container>
  );
}
