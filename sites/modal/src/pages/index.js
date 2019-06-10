import React from "react"
import styled from "@emotion/styled"

import PageLayout from "../components/PageLayout"

const Examples = styled(`div`)`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`

const IndexPage = () => (
  <PageLayout>
    <Examples>
      <h2>Example A</h2>
      <a to="https://greglobinski.github.io/gatsby-plugins/example-one/">
        <img src="example-one.gif" alt="" />
      </a>
      <h2>Example B</h2>
      <a to="https://greglobinski.github.io/gatsby-plugins//example-two">
        <img src="example-two.gif" alt="" />
      </a>
      <h2>Example C</h2>
      <a to="https://greglobinski.github.io/gatsby-plugins//example-three">
        <img src="example-three.gif" alt="" />
      </a>
    </Examples>
  </PageLayout>
)

export default IndexPage
