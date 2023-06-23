import { MeusCurosStyle } from "./MeusCursos.style";

type CursosProps = {
  children: React.ReactNode;
};
export const MeusCursos = ({ children }: CursosProps) => {
  return <MeusCurosStyle>{children}</MeusCurosStyle>;
};
