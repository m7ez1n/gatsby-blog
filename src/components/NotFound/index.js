import React from "react"

import * as S from "./styles"
import getThemeColor from "../../utils/getThemeColor"

const NotFound = () => (
  <S.NotFoundWrapper>
    <h1>404</h1>
    <p>Essa página não existe!</p>
    <S.NotFoundLink
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.5}
      to="/"
      activeClassName="active"
    >
      Voltar para o blog!
    </S.NotFoundLink>
  </S.NotFoundWrapper>
)

export default NotFound
