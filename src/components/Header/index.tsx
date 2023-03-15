import Image from "next/image";
import { Minus } from "phosphor-react";
import {
  Button,
  Container,
  ImageContainer,
  LanguageSwitch,
  Wrapper,
} from "./styles";
import { Navigation } from "@/components";
import { TranslateProps } from "@/@types";

export function Header({
  textTranslated,
  setLanguage,
  language,
}: TranslateProps) {
  return (
    <>
      <Wrapper>
        <Container>
          <ImageContainer href="/" style={{ position: "relative" }}>
            <Image
              src={"./maincore.svg"}
              alt={"Maincore Logo"}
              className="logo"
              sizes="100%"
              priority
              fill
            />
          </ImageContainer>
          <Navigation textTranslated={textTranslated} />
          <LanguageSwitch>
            <Button
              onClick={() => {
                setLanguage?.("pt-BR");
              }}
              active={language === "pt-BR"}
            >
              BR
            </Button>
            <span>
              <Minus size={20} style={{ color: "#0A0D0C", opacity: 0.4 }} />
            </span>
            <Button
              onClick={() => {
                setLanguage?.("en-US");
              }}
              active={language === "en-US"}
            >
              EN
            </Button>
          </LanguageSwitch>
        </Container>
      </Wrapper>
    </>
  );
}
