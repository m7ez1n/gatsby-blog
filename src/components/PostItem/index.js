import React from 'react'

import * as S from './styles'

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          30 de julho de 1029 | 4min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>
          Vamo fazer um blog legal de javascripto
        </S.PostItemTitle>
        <S.PostItemDescription>
          Uma descrição foda pra um post no blog que vai ficar bem
          da hora pq a gente ta fazendo algo da hora
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem;