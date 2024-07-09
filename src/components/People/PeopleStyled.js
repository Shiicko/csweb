import styled from "styled-components";

export const Titulo = styled.div`
  color: white;
  h2 {
    font-size: 2em;
    display: flex;
    align-items: center;
  }
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-color: #15171a3d;
  border-radius: 10px;
  max-width: 800px;
  margin: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Comunidad = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #f0db4f;
  font-size: 1.1em;
  text-align: center;
  margin: 20px;

  p {
    margin: 0;
  }
`;

export const Opiniones = styled.div`
  color: #61dafb;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1em;
  text-align: left;

  p {
    margin: 0;

    strong {
      display: block;
      margin-bottom: 5px;
    }
  }
`;
