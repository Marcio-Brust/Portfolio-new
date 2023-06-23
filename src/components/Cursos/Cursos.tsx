import { CursosStyle } from "./Cursos.style";
import { Title } from "../Titulo/Title";
import useMedia from "../../Hooks/useMedia";
import { theme } from "../../Theme";
import { MeusCursos } from "./MeusCursos/MeusCursos";
import { CursosContainer } from "./MeusCursos/MeusCursos.style";

type CursosProps = {
  id: string;
};

export const Cursos = ({ id }: CursosProps) => {
  const mobile = useMedia("(max-width: 50rem)");

  return (
    <CursosStyle id={id}>
      <Title
        text="Cursos"
        style={{
          fontSize: mobile ? theme.size.h1.m : theme.size.h1.xl,
          marginLeft: mobile ? "10px" : "-2px",
          textAlign: "center",
          marginTop: "50px",
        }}
      />
      <CursosContainer
        style={{ gridTemplateColumns: mobile ? "1fr" : "1fr 1fr" }}
      >
        <MeusCursos>
          <Title text="Origamid" style={{ fontSize: theme.size.h1.s }} />
          <p>Nome: JavaScript Completo ES6</p>
        </MeusCursos>
        <MeusCursos>
          <Title text="Origamid" style={{ fontSize: theme.size.h1.s }} />
          <p>Nome: Reactjs Completo</p>
        </MeusCursos>
        <MeusCursos>
          <Title text="Origamid" style={{ fontSize: theme.size.h1.s }} />
          <p>Nome: TypeScript Para Iniciantes</p>
        </MeusCursos>
        <MeusCursos>
          <Title text="Origamid" style={{ fontSize: theme.size.h1.s }} />
          <p>Nome: HTML5 E CSS Completo</p>
        </MeusCursos>
        <MeusCursos>
          <Title text="Udemy" style={{ fontSize: theme.size.h1.s }} />
          <p>Nome: Nestjs </p>
        </MeusCursos>
        <MeusCursos>
          <Title text="Udemy" style={{ fontSize: theme.size.h1.s }} />
          <p>Nome: Desenvolverdor Moderno</p>
        </MeusCursos>
      </CursosContainer>
    </CursosStyle>
  );
};
