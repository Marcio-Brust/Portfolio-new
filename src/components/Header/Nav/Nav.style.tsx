import styled, { css } from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.size.p.m};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  align-items: center;

  ${(prop) =>
    prop["aria-expanded"] &&
    css`
      position: absolute;
      top: 0;
      width: 150px;
      background: ${({ theme }) => theme.colors.secundary};
      right: 0;
      border-radius: 5px;
      text-align: center;
      padding-top: 100px;
      padding-bottom: 30px;
      animation: showMenu 0.3s forwards;
    `}
  ${(prop) =>
    prop["aria-expanded"] &&
    css`
      @keyframes showMenu {
        from {
          margin-right: -80px;
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `};
`;

export const LiStyled = styled.li`
  list-style: none;
`;
