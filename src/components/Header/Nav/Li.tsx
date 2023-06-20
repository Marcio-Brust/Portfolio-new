import { ReactNode } from "react";
import { LiStyled } from "./Nav.style";

type LiProps = {
  children: ReactNode;
};

export const Li = ({ children }: LiProps) => {
  return <LiStyled>{children}</LiStyled>;
};
