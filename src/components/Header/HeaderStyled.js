import styled from "styled-components";

export const nav = styled.header`
  background-color: #00000045;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
`;

export const links = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  a {
    padding: 1rem 1.5rem;
    text-decoration: none;
    color: white;
    font-weight: lighter;
    opacity: 0.37;
    transition: opacity 5ms ease 0s;
  }
  a:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const burguer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    color: white;
  }
`;
