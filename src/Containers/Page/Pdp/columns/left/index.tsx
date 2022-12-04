import { useRef, useState, useEffect } from "react";
import {
  ButtonSlider,
  ContainerImagesPDP,
  ContainerMainImg,
  SilderLeft,
} from "./styles";

export function ContainerImgPDP(props: {
  productImg: string[];
  thumbnail: string;
}) {
  const carrousel = useRef<HTMLUListElement>(null);
  const [urlImg, setUrlImg] = useState("");

  const handleTopClick = (): void => {
    if (carrousel.current?.offsetWidth) {
      carrousel.current.scrollTop -= carrousel.current.offsetWidth;
    }
  };

  const handleDownClick = (): void => {
    if (carrousel.current?.offsetWidth) {
      carrousel.current.scrollTop += carrousel.current.offsetWidth;
    }
  };

  const handleToggleImg = (url: string) => {
    setUrlImg(url);
  };

  useEffect(() => {
    setUrlImg(props.thumbnail);
  }, [props.thumbnail]);

  return (
    <ContainerImagesPDP>
      <ButtonSlider down={false} onClick={handleTopClick}>
        ^
      </ButtonSlider>
      <SilderLeft ref={carrousel}>
        {props.productImg.length > 0 &&
          props.productImg.map((image) => (
            <li key={image} onClick={() => handleToggleImg(image)}>
              <img src={image} alt="slider product" />
            </li>
          ))}
      </SilderLeft>
      <ButtonSlider down onClick={handleDownClick}>
        ^
      </ButtonSlider>

      <ContainerMainImg>
        <img src={urlImg} alt="poduct" />
      </ContainerMainImg>
    </ContainerImagesPDP>
  );
}
