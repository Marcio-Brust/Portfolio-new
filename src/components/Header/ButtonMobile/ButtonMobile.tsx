import { VscMenu } from "react-icons/vsc";
import { ButtonStyle } from "./Button.style";

type ButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ButtonMobile = ({ text }: ButtonProps) => {
  function handleMenu() {
    console.log("oi");
  }

  return (
    <ButtonStyle onClick={handleMenu}>
      {text}
      <VscMenu />
    </ButtonStyle>
  );
};
