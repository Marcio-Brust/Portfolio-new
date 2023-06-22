import { ReactNode, useContext } from "react";
import { NavStyle } from "./Nav.style";
import { MenuContext } from "../../../Context/MenuContext/MenuContext";

type NavProps = {
  children: ReactNode;
};

export const Nav = ({ children }: NavProps) => {
  const { isVisible } = useContext(MenuContext);

  return <NavStyle aria-expanded={isVisible}>{children}</NavStyle>;
};

export default Nav;
