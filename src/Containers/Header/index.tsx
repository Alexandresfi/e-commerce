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
  const handleClick = () => {
    alert("Em breve estará disponível");
  };

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
            <img src={IconCart} alt="cart" onClick={handleClick} />
          </div>
        </ContentHeadert>
      </ContainerHeader>
    </header>
  );
}
