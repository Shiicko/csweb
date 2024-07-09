import * as s from "./ItemsStyled";

export const Items = () => {
  return (
    <>
      <s.Titulo>
        <h2>
          Skins destacadas <span>🔥</span>
        </h2>
      </s.Titulo>
      <s.CardContainer>
        <s.Card>
          <s.CardContent>
            <s.CardImage src="https://key-drop.com/blog/wp-content/uploads/2024/01/m4a4-dragon-king-1024x356.webp" />
            <s.CardText> M4A4 | Dragon King</s.CardText>
          </s.CardContent>
        </s.Card>
        <s.Card>
          <s.CardContent>
            <s.CardImage src="https://key-drop.com/blog/wp-content/uploads/2024/01/desert-eagle-code-red-1024x579.webp" />
            <s.CardText>Desert Eagle | Code Red</s.CardText>
          </s.CardContent>
        </s.Card>
        <s.Card>
          <s.CardContent>
            <s.CardImage src="https://key-drop.com/blog/wp-content/uploads/2024/01/glock-18-bullet-queen-1024x663.webp" />
            <s.CardText>Glock-18 | Bullet Queen</s.CardText>
          </s.CardContent>
        </s.Card>
        <s.Card>
          <s.CardContent>
            <s.CardImage src="https://key-drop.com/blog/wp-content/uploads/2024/01/gut-knife-autotronic-1024x895.webp" />
            <s.CardText>Hunter knife | Autotronic</s.CardText>
          </s.CardContent>
        </s.Card>
        <s.Card>
          <s.CardContent>
            <s.CardImage src="https://key-drop.com/blog/wp-content/uploads/2024/01/awp-wildfire-1024x219.webp " />
            <s.CardText>AWP | Wildfire</s.CardText>
          </s.CardContent>
        </s.Card>
        <s.Card>
          <s.CardContent>
            <s.CardImage src="https://key-drop.com/blog/wp-content/uploads/2024/01/galil-ar-signal-1024x362.webp " />
            <s.CardText>Galil AR | Signal </s.CardText>
          </s.CardContent>
        </s.Card>
      </s.CardContainer>
    </>
  );
};
