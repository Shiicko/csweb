import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 190px;
  height: 254px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  margin: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  border-radius: 20px;
  transition: all 0.2s;

  ${Card}:hover & {
    transform: scale(0.98);
  }
`;

export const Titulo = styled.h2`
  color: white;
`;
export const CardText = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 85%;
  object-fit: contain;
  border-radius: 20px 20px 0 0;
`;
