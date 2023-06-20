import React from "react";
import { NavStyle } from "./Nav.style";

type NavProps = {
  children: React.ReactNode;
};

export const Nav = ({ children }: NavProps) => {
  return <NavStyle>{children}</NavStyle>;
};

export default Nav;
