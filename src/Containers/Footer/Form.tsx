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
          <h2>Receive news</h2>
          <p>Fill in your details to receive news in your email</p>
        </Texts>

        <ContentForm action="">
          <input type="text" placeholder="Name" required />

          <input type="email" name="email" placeholder="E-mail" required />

          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Cellphone"
            value={numberCellPhone}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </ContentForm>
      </Content>
    </ContainerForm>
  );
}
