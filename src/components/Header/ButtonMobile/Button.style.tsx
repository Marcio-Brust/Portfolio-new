import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.size.p.m};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  z-index: 100;
`;
