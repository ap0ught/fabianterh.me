import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import React from "react"
import styled from "styled-components"

import Avatar from "../components/avatar"
import Layout from "../components/layout"
import LinkCard from "../components/linkCard"
import SEO from "../components/seo"
import Theme, { Mixins } from "../theme"

const Section = styled.div`
  padding: 0 1rem;

  h2 {
    font-family: ${Theme.typography.fontFamilyMonospace};
    margin-bottom: 0.5rem;
  }
`

const Name = styled.h1`
  ${Mixins.gradientedText}
  font-family: ${Theme.typography.fontFamily};
  font-size: 3rem;
`

const IndexPage = () => {
  return (
    <Layout centered>
      <SEO title="Home" />
      <Section>
        <h2>Hello world!</h2>
        <Name>Hi i'm Mayfield.</Name>
        <Avatar />
        <div style={{ marginTop: `2rem` }}>
          <LinkCard icon={faGithub} url="https://github.com/ap0ught">
            Github
          </LinkCard>
          <LinkCard icon={faLinkedin} url="https://linkedin.com/in/ap0ught/">
            Linkedin
          </LinkCard>
          <LinkCard icon={faMedium} url="https://medium.com/@christophermayfield">
            Blog
          </LinkCard>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
