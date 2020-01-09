import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const NotFoundWrapper = styled.section`
  align-items: center;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  width: 70vw;
  padding: 0px 20px;
  
  h1 {
    color: var(--texts);
    font-size: 120px;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
  }

  p {
    color: var(--texts);
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
`

export const NotFoundLink = styled(AniLink)`
  color: var(--texts);
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 1rem;
  text-transform: uppercase;
  padding: 0px 10px;
  text-decoration: none;
  border: 2px solid var(--texts);
  box-sizing: border-box;

  &:hover {
    color: var(--highlight);
    border-color: var(--highlight);
  }
`
