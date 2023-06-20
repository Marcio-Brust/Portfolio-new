import React from "react";
import { LiStyled } from "./Nav.style";

type LiProps = {
  children: React.ReactNode;
};

export const Li = ({ children }: LiProps) => {
  return <LiStyled>{children}</LiStyled>;
};
