import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image_02.jpeg"
import Image from "gatsby-image"

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} alt="basic" width="100%" />
      </article>
      <article className="single-image">
        <h3>fixed image/Blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/Svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          {/* only parent container width can change width of gatsby image */}
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </article>
    </section>
  )
}

export default Images

export const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image_03.jpeg" }) {
      childImageSharp {
        fixed(width: 350, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image_01.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
