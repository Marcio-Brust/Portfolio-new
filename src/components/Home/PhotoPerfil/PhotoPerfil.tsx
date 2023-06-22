import { PhotoStyle } from "./PhotoPerfil.style";
import img from "../../../assets/ImgMarcio.png";
import useMedia from "../../../Hooks/useMedia";

export const PhotoPerfil = () => {
  const mobile = useMedia("(mex-width:50rem)");
  return (
    <PhotoStyle>
      <img
        style={{ margin: mobile ? "0" : "50px auto 0px auto" }}
        src={img}
        alt="imagem"
      />
    </PhotoStyle>
  );
};
