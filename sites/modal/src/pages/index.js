import React from "react"
import { Link as BaseLink } from "gatsby"
import styled from "@emotion/styled"

import PageLayout from "../components/PageLayout"

const Link = styled(BaseLink)`
  font-size: 1.5rem;
`

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
      Example one
      <Link to="/example-one">
        <img src="example-one.gif" alt="" />
      </Link>
      Example two
      <Link to="/example-two">
        <img src="example-two.gif" alt="" />
      </Link>
      <Link to="/example-three">Example two</Link>
    </Examples>
  </PageLayout>
)

export default IndexPage
