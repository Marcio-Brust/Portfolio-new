import styled from "styled-components";
import { theme } from "../../Theme";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.size.p.l};
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;       
