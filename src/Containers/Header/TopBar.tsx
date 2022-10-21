import { ContentTopBar, TopBar } from "./styles";

import IconGithub from "../../assets/github.png";
import IconLinkedin from "../../assets/linkedin.png";

export function ContainerTopBar() {
  return (
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
  );
}
