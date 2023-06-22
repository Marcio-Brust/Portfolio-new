import { useContext } from "react";
import { MenuContext } from "../../../Context/MenuContext/MenuContext";
import { LinkStyle } from "./Link.style";

type LinkPorps = {
  href: string;
  text: string;
};

export const Link = ({ text, href }: LinkPorps) => {
  const { isVisible } = useContext(MenuContext);

  return (
    <LinkStyle aria-expanded={isVisible} href={href}>
      {text}
    </LinkStyle>
  );
};
