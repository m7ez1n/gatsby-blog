import React from "react"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import { MainContent } from "../styles/base"
import { Ghost } from 'styled-icons/boxicons-solid'
import SEO from "../components/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <MainContent>
      <h1>Bem-vindo <Ghost size={24} /> </h1>
      <p>
        Olá, me chamo Mateus e você está no meu blog. Você pode conhecer um pouco
        mais da minha história acessando a parte do blog "Sobre mim".
      </p>
      
      <p>
        Ou pode navegar pelo blog e encontrar alguns posts legais. Vou deixar alguns exemplos listados abaixo para vocês: 
      </p>
    </MainContent>

    <PostItem title="Algum titulo" description="Descrição mó da hora" category="MISC" date="03 de maio de 2019" timeToRead="3" />
    <PostItem title="Algum titulo" description="Descrição mó da hora" category="MISC" date="03 de maio de 2019" timeToRead="3" />
  </Layout>
)

export default HomePage
