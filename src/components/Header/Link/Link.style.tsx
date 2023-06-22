import styled, { css } from "styled-components";

export const LinkStyle = styled.a`
  text-decoration: none;
  color: initial;
  padding: 20px 30px;
  border-radius: 5px;

  ${(prop) =>
    !prop["aria-expanded"] &&
    css`
      &:hover {
        background: ${({ theme }) => theme.colors.secundary};
      }
    `};
`;
