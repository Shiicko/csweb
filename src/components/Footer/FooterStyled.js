import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #08080840;
  color: #fff;
  padding: 30px 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const InfoBox = styled.div`
  flex: 1 0 300px;
  margin: 10px;
  padding: 20px;
  background-color: #03000a;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoTitle = styled.h3`
  color: #f0db4f;
  font-size: 1.2em;
`;

export const InfoText = styled.p`
  color: #ccc;
  margin-top: 10px;
`;

export const InfoLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #f0db4f;
  }
`;

export const CopyRight = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 0.8em;
  color: #ccc;
`;
