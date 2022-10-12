import { Form } from "./Form";
import { Institucional } from "./institucional";
import { ContainerFooter } from "./styles";

export function Footer() {
  return (
    <ContainerFooter>
      <Form />
      <Institucional />
    </ContainerFooter>
  );
}
