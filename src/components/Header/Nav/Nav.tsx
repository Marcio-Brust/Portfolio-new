import { ReactNode, useContext } from "react";
import { NavStyle } from "./Nav.style";
import { MenuContext } from "../../../Context/MenuContext/MenuContext";
import useMedia from "../../../Hooks/useMedia";

type NavProps = {
  children: ReactNode;
  style?: React.CSSProperties | undefined;
};

export const Nav = ({ children }: NavProps) => {
  const mobile = useMedia("(max-width: 50rem)");

  const { isVisible } = useContext(MenuContext);

  return (
    <NavStyle
      style={{
        display: !mobile ? "flex" : mobile && !isVisible ? "none" : "block",
      }}
      aria-expanded={mobile && isVisible}
    >
      {children}
    </NavStyle>
  );
};

export default Nav;
