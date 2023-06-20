import { MenuContextProvider } from "../../Context/MenuContext/MenuContext";
import { ButtonMobile } from "./ButtonMobile/ButtonMobile";
import { HeaderStyle } from "./Header.style";
import { Link } from "./Link/Link";
import { Li } from "./Nav/Li";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <MenuContextProvider>
      <HeaderStyle>
        <h1>Dev</h1>

        <Nav
          children={
            <>
              <Li>
                <Link href="#home" text="Home" />
              </Li>
              <Li>
                <Link href="#sobre" text="Sobre" />
              </Li>
              <Link href="#cursos" text="Cursos" />
              <Li>
                <Link href="#projetos" text="Projetos" />
              </Li>
              <Li>
                <Link href="#contato" text="Contato" />
              </Li>
              <ButtonMobile text="Menu" onClick={undefined} />
            </>
          }
        />
      </HeaderStyle>
    </MenuContextProvider>
  );
};

export default Header;
