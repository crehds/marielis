import styled from "styled-components"

export const ArticleWrapper = styled.article`
  border: 1px solid white;
  display: grid;
  grid-template-rows: 15em 2fr 3fr;
`

export const ArticleTitle = styled.div`
  color: gray;
  text-align: center;
  margin: 10px 0px;
  padding: 4px 4px;
  h3 {
    font-size: 2rem;
  }
`

export const ArticleParagraph = styled.p`
  color: white;
  text-align: justify;
  padding: 15px;
`

export const ArticleImg = styled.div`
  border: 1px solid black;
  img {
    width: 100%;
    height: 100%;
  }
`