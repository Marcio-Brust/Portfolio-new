import useMedia from "../../Hooks/useMedia";
import { HomeStyle } from "./Home.style";
import { PhotoPerfil } from "./PhotoPerfil/PhotoPerfil";
import { Presentation } from "./Presentation/Presentation";

type HomeProps = {
  id: string;
};

export const Home = ({ id }: HomeProps) => {
  const mobile = useMedia("(max-width: 50rem)");
  return (
    <HomeStyle id={id} style={{ display: mobile ? "block" : "flex" }}>
      <Presentation />
      <PhotoPerfil />
    </HomeStyle>
  );
};
