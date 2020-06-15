import PropTypes from "prop-types"
import React from "react"
import * as S from "./styles"
import { Link } from "gatsby"
import Logo from "../../components/Logo"

const Header = () => (
  <S.Header>
    <S.Wrapper>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
      <S.Link to="/inicio">Inicio</S.Link>
      <S.Link to="/inicio">O Caminho Livre</S.Link>
      <S.Link to="/inicio">Como funciona</S.Link>
      <S.Link to="/inicio">Cadastro</S.Link>
      <S.Link to="/inicio">Perguntas frequentes</S.Link>
    </S.Wrapper>
  </S.Header>
)

export default Header
