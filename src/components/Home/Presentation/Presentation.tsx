import useMedia from "../../../Hooks/useMedia";
import { theme } from "../../../Theme";
import { Title } from "../../Titulo/Title";
import { PresentationStyle } from "./Presentation.style";

export const Presentation = () => {
  const mobile = useMedia("(max-width: 50rem)");
  return (
    <PresentationStyle style={{ justifyItems: mobile ? "center" : "start" }}>
      <Title
        text="Desenvolvedor"
        style={{
          fontSize: mobile ? theme.size.h1.m : theme.size.h1.xl,
          marginLeft: mobile ? "10px" : "-2px",
        }}
      />
      <Title
        style={{
          color: theme.colors.primary,
          fontSize: mobile ? theme.size.h1.xs : theme.size.h1.m,
          fontWeight: "700",
        }}
        text="Olá, sou Márcio Brust "
      >
        <p
          style={{
            color: theme.colorsLetter.secundary,
            fontSize: mobile ? theme.size.p.m : theme.size.p.xl,
            fontWeight: "400",
          }}
        >
          Saiba oque sei fazer como <br />{" "}
          <b
            style={{
              color: theme.colorsLetter.primary,
            }}
          >
            Desenvolvedor
          </b>
          ,
          <br />
          Desça e confira.
        </p>
      </Title>
    </PresentationStyle>
  );
};
