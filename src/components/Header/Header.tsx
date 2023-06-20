import { Link } from "../Link/Link";
import Nav from "../Nav/Nav";
import { HeaderStyle } from "./Header.style";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Dev</h1>
      <Nav
        children={
          <>
            <Link href="#home" text="Home" />
            <Link href="#sobre" text="Sobre" />
            <Link href="#cursos" text="Cursos" />
            <Link href="#projetos" text="Projetos" />
            <Link href="#contato" text="Contato" />
          </>
        }
      />
    </HeaderStyle>
  );
};

export default Header;
