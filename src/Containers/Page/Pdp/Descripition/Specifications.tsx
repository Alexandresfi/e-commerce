import { ContainerSpecifications, SpecificationsText } from "./styles";

export function Specifications() {
  return (
    <ContainerSpecifications>
      <h2>Specifications</h2>
      <SpecificationsText>
        <li>
          <div>
            <span>teste 1:</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              eaque autem. Rem odit quia unde explicabo optio, quas error saepe
              ipsum nisi magni maxime quam qui consectetur voluptas eligendi.
              At!
            </p>
          </div>
        </li>

        <li>
          <div>
            <span>teste 2:</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              eaque autem. Rem odit quia unde explicabo optio, quas error saepe
              ipsum nisi magni maxime quam qui consectetur voluptas eligendi.
              At!
            </p>
          </div>
        </li>
      </SpecificationsText>
    </ContainerSpecifications>
  );
}
