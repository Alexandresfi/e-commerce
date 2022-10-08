import {
  TopBar,
  ContentTopBar,
  ContainerHeader,
  ContentHeadert,
  ContainerSearch,
} from "./styles";

import IconGithub from "../../assets/github.png";
import IconLinkedin from "../../assets/linkedin.png";
import IconLogo from "../../assets/logo.png";
import IconLogin from "../../assets/login.png";
import IconCart from "../../assets/cart.png";
import IconSearch from "../../assets/search.png";

export function Header() {
  return (
    <header>
      <TopBar>
        <ContentTopBar>
          <p>
            Desenvolvido por <span>Alexandre Nascimento</span>
          </p>

          <div>
            <a href="https://github.com/Alexandresfi">
              <img src={IconGithub} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/alexandre-nascimento-66692920a/">
              <img src={IconLinkedin} alt="linkedin" />
            </a>
          </div>
        </ContentTopBar>
      </TopBar>

      <ContainerHeader>
        <ContentHeadert>
          <div>
            <img src={IconLogo} alt="logo" />
          </div>

          <ContainerSearch>
            <input type="text" placeholder="Qual produto você procura?" />
            <button>
              <img src={IconSearch} alt="search" />
            </button>
          </ContainerSearch>

          <div className="container">
            <img src={IconLogin} alt="login" />
            <img src={IconCart} alt="cart" />
          </div>
        </ContentHeadert>
      </ContainerHeader>
    </header>
  );
}
