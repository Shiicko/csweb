import * as s from "./FooterStyled";

export const Footer = () => {
  return (
    <s.FooterContainer>
      <s.FooterContent>
        <s.FooterInfo>
          <s.InfoBox>
            <s.InfoTitle>Cajas Abiertas</s.InfoTitle>
            <s.InfoText>Más de 1000</s.InfoText>
            <s.InfoLink href="#">Ver detalles</s.InfoLink>
          </s.InfoBox>
          <s.InfoBox>
            <s.InfoTitle>Premios XX</s.InfoTitle>
            <s.InfoText>Ganadores reconocidos</s.InfoText>
            <s.InfoLink href="#">Ver más</s.InfoLink>
          </s.InfoBox>
          <s.InfoBox>
            <s.InfoTitle>Compromiso</s.InfoTitle>
            <s.InfoText>Con la comunidad</s.InfoText>
            <s.InfoLink href="#">Leer más</s.InfoLink>
          </s.InfoBox>
        </s.FooterInfo>
        <s.CopyRight>
          <p>&copy; 2024 Empresa XYZ. Todos los derechos reservados.</p>
        </s.CopyRight>
      </s.FooterContent>
    </s.FooterContainer>
  );
};
