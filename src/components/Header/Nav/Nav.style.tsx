import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.size.p.m};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  align-items: center;
`;

export const LiStyled = styled.li`
  list-style: none;
`;
