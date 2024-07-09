import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    user-select: none;
    background-image: url('public/images/bckg.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
  }
  html{
    user-select: none;
  }
`;
