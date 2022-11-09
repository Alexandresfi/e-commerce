import { ContainerInstitucional, Content, ListLinks } from "./styles";
import Payment from "../../../assets/pagemento.jpg";
import Security from "../../../assets/seguranca.jpg";

export function Institucional() {
  return (
    <article>
      <ContainerInstitucional>
        <Content>
          <div>
            <h3>Institutional</h3>
            <ListLinks>
              <li>
                <a href="/#">Who we are</a>
              </li>

              <li>
                <a href="/#">Fast delivery</a>
              </li>

              <li>
                <a href="/#">Our stores</a>
              </li>
            </ListLinks>
          </div>

          <div>
            <h3>Help</h3>
            <ListLinks>
              <li>
                <a href="/#">Privacy Policy</a>
              </li>

              <li>
                <a href="/#">Exchanges and returns</a>
              </li>

              <li>
                <a href="/#">FAQ</a>
              </li>

              <li>
                <a href="/#">contact us</a>
              </li>
            </ListLinks>
          </div>

          <div>
            <h3>Payment methods</h3>
            <img src={Payment} alt="payment" />
          </div>

          <div>
            <h3>Payment methods</h3>
            <img src={Security} alt="security" />
          </div>
        </Content>

        <h1>
          This site was built for study purposes, therefore we are not a real
          store. I thank you for your attention.
        </h1>
      </ContainerInstitucional>
    </article>
  );
}
