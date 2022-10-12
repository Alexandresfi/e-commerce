import { ContainerInstitucional, Content, ListLinks } from "./styles";
import Payment from "../../../assets/pagemento.jpg";
import Security from "../../../assets/seguranca.jpg";

export function Institucional() {
  return (
    <article>
      <ContainerInstitucional>
        <Content>
          <div>
            <h3>Instituvional</h3>
            <ListLinks>
              <li>
                <a href="/#">Quem somos</a>
              </li>

              <li>
                <a href="/#">Entrega expressa</a>
              </li>

              <li>
                <a href="/#">Nossas Lojas</a>
              </li>
            </ListLinks>
          </div>

          <div>
            <h3>Ajuda</h3>
            <ListLinks>
              <li>
                <a href="/#">Política de privacidade</a>
              </li>

              <li>
                <a href="/#">Trocas devoluções</a>
              </li>

              <li>
                <a href="/#">Dúvidas frequentes</a>
              </li>

              <li>
                <a href="/#">Fale conosco</a>
              </li>
            </ListLinks>
          </div>

          <div>
            <h3>Formas de pagamento</h3>
            <img src={Payment} alt="payment" />
          </div>

          <div>
            <h3>Formas de pagamento</h3>
            <img src={Security} alt="security" />
          </div>
        </Content>

        <h1>
          Esta site foi construido para fins de estudos, portanto não somos uma
          loja real. Deste já agradeço pela atenção.
        </h1>
      </ContainerInstitucional>
    </article>
  );
}
