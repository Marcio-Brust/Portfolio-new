import { ProjetosStyles } from "./Projetos.style";

const projetosGit = [
  {
    Nome: "Pokemon",
    Tecnologias: ["React", "TypeScript", "Styled-component"],
    Descrição:
      "Projeto Feito para pro em pratica os estudos, no projeto consumo uma Api de cards Pokemon",
  },
  {
    Nome: "Rocketcard",
    Tecnologias: ["React", "TypeScript", "Styled-component", "useContext"],
  },
  "Cartão Nubank",
  "RocketBlog",
  "Great Coffee",
];

export const Projetos = () => {
  return (
    <ProjetosStyles>
   {/*    {projetosGit.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </ProjetosStyles>
  );
};
