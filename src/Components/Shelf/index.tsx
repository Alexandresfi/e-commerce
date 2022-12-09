import { Product } from "../Product";
import {
  Button,
  Container,
  ContainerButtons,
  ContainerCarrousel,
} from "./styles";
import Arrows from "../../assets/right-arrow.png";
import { useRef } from "react";

interface ChildrenProps {
  require: string;
  titles: string;
  search: boolean;
}

export function Shelf(props: ChildrenProps) {
  const carrousel = useRef<HTMLDivElement>(null);

  const handleLeftClick = (): void => {
    if (carrousel.current?.offsetWidth) {
      carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    }
  };

  const handleRightClick = (): void => {
    if (carrousel.current?.offsetWidth) {
      carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    }
  };

  return (
    <Container>
      <h1>{props.titles}</h1>

      <ContainerCarrousel ref={carrousel}>
        <Product require={props.require} search={false} />
      </ContainerCarrousel>

      <ContainerButtons>
        <Button onClick={handleLeftClick}>
          <img src={Arrows} alt="left-arrow" className="left" />
        </Button>
        <Button onClick={handleRightClick}>
          <img src={Arrows} alt="right-arrow" />
        </Button>
      </ContainerButtons>
    </Container>
  );
}
