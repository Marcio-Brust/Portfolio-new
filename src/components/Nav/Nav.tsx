import React from "react";
import { NavStyled } from "./Nav.style";

type NavProps = {
  children: React.ReactNode;
};

export const Nav = ({ children }: NavProps) => {
  return <NavStyled>{children}</NavStyled>;
};

export default Nav;
