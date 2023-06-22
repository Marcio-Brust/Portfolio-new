import styled from "styled-components";

export const TitleStyled = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.size.h1.xl};
  color: ${({ theme }) => theme.colorsLetter.primary};
`;
