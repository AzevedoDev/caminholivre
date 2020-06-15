import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function BannerImage() {
  const { bannerImage } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "caminhaopista.png" }) {
        childImageSharp {
          fixed(width: 783) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img durationFadeIn={100} fixed={bannerImage.childImageSharp.fixed} />
}
