import { useState } from "react";
import { ContainerForm, Content, ContentForm, Texts } from "./styles";

export function Form() {
  const [numberCellPhone, setNumberCellPhone] = useState<string>("");

  const handleChange = (value: string) => {
    setNumberCellPhone(maskCellPhone(value));
  };

  const maskCellPhone = (value: string) => {
    return value
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  return (
    <ContainerForm>
      <Content>
        <Texts>
          <h2>Receba Novidades</h2>
          <p>Preencha seus dados para receber novidades em seu e-mail</p>
        </Texts>

        <ContentForm action="">
          <input type="text" placeholder="Nome" required />

          <input type="email" name="email" placeholder="E-mail" required />

          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Celular"
            value={numberCellPhone}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </ContentForm>
      </Content>
    </ContainerForm>
  );
}
