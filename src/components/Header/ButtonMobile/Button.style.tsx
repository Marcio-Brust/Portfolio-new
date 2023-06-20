import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.size.p.l};
`;
