import { TitleStyled } from "./Title.style";

type TitleProps = {
  children?: React.ReactNode;
  text: string;
  style?: React.CSSProperties | undefined;
};

export const Title = ({ text, style, children }: TitleProps) => {
  return (
    <TitleStyled style={style}>
      {text}
      {children}
    </TitleStyled>
  );
};
