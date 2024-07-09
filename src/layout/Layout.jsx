import styled from "styled-components";

const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
