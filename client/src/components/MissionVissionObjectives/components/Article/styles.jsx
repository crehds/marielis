import styled from "styled-components"

export const ArticleWrapper = styled.article`
  /* border: 1px solid white; */
  display: grid;
  grid-template-rows: 15em 2fr 3fr;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.4);
  margin: 2px;
`

export const ArticleTitle = styled.div`
  color: rgba(235, 177, 213, 0.904);
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
  /* border: 1px solid black; */
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`