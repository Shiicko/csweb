import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;

  gap: 300px;
  padding-top: 150px;
  margin-bottom: 180px;
  @media (max-width: 1030px) {
    flex-direction: column;
    gap: 5px;
    padding-top: 100px;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  padding: 20px;
  color: #fff;

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }

  p {
    margin: 10px 0 0;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    text-align: center;
    p {
      font-size: 2.5rem;
    }
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  border: none;
  padding: 12px 24px;
  background-color: #022137;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s, background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #43002e;
    transition: left 0.3s;
    z-index: -1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: #3498db;
    background-color: #43002e;
  }
`;
