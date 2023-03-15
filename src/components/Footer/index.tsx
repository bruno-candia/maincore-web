import {
  Contact,
  Container,
  CopyContainer,
  Hero,
  Line,
  SocialMedia,
  Wrapper,
} from "./styles";
import Image from "next/image";
import { LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Contact>
          <h3>Contato:</h3>
          <p>exemplo@maincore.com.br</p>
          <p>+55 35 9 9987-8999</p>
        </Contact>
        <Hero>
          <Image
            src={"./maincore-white.svg"}
            alt={"Maincore Logo"}
            className="logo"
            priority
            sizes="50%"
            width={100}
            height={100}
          />
          <div>
            <p>
              Nossa integração de hardware e software facilita o desenvolvimento
              de produtos modernos.
            </p>
            <p style={{ fontWeight: 700 }}>
              Transforme o futuro com a Maincore.
            </p>
          </div>
        </Hero>
        <SocialMedia>
          <h3>Nossa Rede:</h3>
          <a href="https://www.linkedin.com/company/maincore/" target="_blank">
            <LinkedinLogo size={32} weight="fill" />
            <p>/maincore</p>
          </a>
        </SocialMedia>
      </Container>
      <Line></Line>
      <CopyContainer>
        <p>© 2023 Maincore. Todos os direitos reservados.</p>
        <p>
          <a href="">Termos de Uso</a>e<a href="">Política de Privacidade</a>
        </p>
      </CopyContainer>
    </Wrapper>
  );
}
