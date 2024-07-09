import * as s from "./HeroStyled";
export const Hero = () => {
  return (
    <>
      <s.HeroContainer>
        <s.HeroText>
          <h1>Explora, abre, y equipa... </h1>
          <p>Descubre la esencia</p>
          <hr />
          <s.Button>Ir a las cajas</s.Button>
        </s.HeroText>
        <s.ImageSection>
          <img
            src="https://ih1.redbubble.net/image.4940982788.8058/raf,360x360,075,t,fafafa:ca443f4786.jpg"
            alt=""
          />
        </s.ImageSection>
      </s.HeroContainer>
    </>
  );
};
