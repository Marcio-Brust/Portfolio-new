import { styled } from "styled-components";

export const MeusCurosStyle = styled.div`
  text-align: start;
  border-radius: 5px;
  background:#f6f6f6;
  width: 350px;
  padding: 20px;
  justify-self: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.colorsLetter.secundary};
  font-size: ${({ theme }) => theme.size.p.m};
`;

export const CursosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
