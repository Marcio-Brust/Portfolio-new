import { LinkStyle } from "./Link.style";

type LinkPorps = {
  href: string;
  text: string;
};



export const Link = ({ text, href }: LinkPorps) => {
  return <LinkStyle href={href}>{text}</LinkStyle>;
};
