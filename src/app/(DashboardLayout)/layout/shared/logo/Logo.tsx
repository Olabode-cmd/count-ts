import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "40px",
  width: "180px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/count-green.png" alt="logo" height={26} width={135} priority />
    </LinkStyled>
  );
};

export default Logo;
