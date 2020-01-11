import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { MainContent } from "../styles/base"
import SocialLinks from "../components/SocialLinks"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Uma página para você leitor, saber mais sobre mim."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Eai pessol, tudo bem? Bom comigo está tudo bem, me chamo Mateus
        Pinheiro, nasci em 2001 na cidade de Goiânia capital de Goiás.
      </p>
      <p>
        Atualmente sou estagiário em uma startup chamada{" "}
        <a
          href="https://www.leb.eng.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LEB
        </a>
        , tenho um contato maior com a parte de Frontend com a tecnologia React,
        mas também sou apaixonado por backend em NodeJS e todo ecosistema JS em
        geral.
      </p>
      <p>
        Hoje em dia estou cursando Ciência da Computação na Universidade
        Paulista (UNIP), estou no 5º período de 8º, tem a previsão de término
        para 2021.
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML</li>
        <li>CSS (Style Components, Sass)</li>
        <li>Javascript</li>
        <li>ReactJS / Redux / Flux</li>
        <li>NodeJS</li>
        <li>Git</li>
        <li>MySQL - MongoDB - Postgres</li>
        <li>Java</li>
        <li>
          Quero melhorar meus conhecimentos nessas tecnologias antes de ir para
          outras!
        </li>
      </ul>

      <h2>Comunidade</h2>

      <p>
        Sou integrante da melhor comunidade do Brasil, ou seja a{" "}
        <a
          href="https://www.heartdevs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          He4rt Developers{" "}
        </a>
        ela tem o objetivo de trazer pessoas para a área de TI, mas também conta
        com o objetivo de fazer com que iniciantes na área se sintam acolhidos e
        saibam que a comunidade sempre vai estar ali para ajudar a todos.
      </p>

      <h2>Contato</h2>

      <p>
        Para entrar em contato comigo você pode acessar qualquer um dessas redes
        sociais através dos links abaixo e mandar um "Oi!" haha
      </p>
    </MainContent>

    <SocialLinks />
  </Layout>
)

export default AboutPage
