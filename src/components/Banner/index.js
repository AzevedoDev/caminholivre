import React from "react"
import * as S from "./styles"
import BannerImage from "../BannerImage"

function Banner() {
  return (
    <S.Banner>
      <S.Wrapper>
        <S.Content>
          <S.Title>
            Qualidade de vida é ter o Caminho Livre na estrada com você
          </S.Title>
          <S.SubTitle>
            Conheça o aplicativo que facilita a sua vida na estrada e te
            proporciona segurança e bem estar em todas as viagens e paradas.
          </S.SubTitle>
          <S.Button>SAIBA MAIS</S.Button>
        </S.Content>
        <BannerImage />
      </S.Wrapper>
    </S.Banner>
  )
}

export default Banner
