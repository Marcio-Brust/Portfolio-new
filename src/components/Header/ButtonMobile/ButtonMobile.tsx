import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { ButtonStyle } from "./Button.style";
import { useContext, MouseEventHandler } from "react";
import { MenuContext } from "../../../Context/MenuContext/MenuContext";
import useMedia from "../../../Hooks/useMedia";

type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonMobile = ({ text }: ButtonProps) => {
  const { handleClick, isVisible } = useContext(MenuContext);
  const mobile = useMedia("(max-width: 50rem)");

  return (
    <ButtonStyle
      style={{ display: mobile ? "flex" : "none" }}
      onClick={handleClick}
    >
      {text}
      {isVisible ? <VscChromeClose /> : <VscMenu />}
    </ButtonStyle>
  );
};
