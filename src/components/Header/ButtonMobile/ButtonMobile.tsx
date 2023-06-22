import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { ButtonStyle } from "./Button.style";
import { useContext, MouseEventHandler } from "react";
import { MenuContext } from "../../../Context/MenuContext/MenuContext";

type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonMobile = ({ text }: ButtonProps) => {
  const { handleClick, isVisible } = useContext(MenuContext);

  return (
    <ButtonStyle onClick={handleClick}>
      {text}
      {isVisible ? <VscChromeClose /> : <VscMenu />}
    </ButtonStyle>
  );
};
