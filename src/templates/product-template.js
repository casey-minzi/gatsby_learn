import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

const productTemplate = ({ data }) => {
  const product = data.product
  console.log(product)
  return (
    <Layout>
      <Link to="/products">back to products</Link>
      <h1>single product</h1>
      <section>
        <Image fixed={product.image.fixed} />
        <h3>
          {product.title}
          <span>{product.price}</span>
        </h3>
        <p>{product.info.info}</p>
        <button>add to cart</button>
      </section>
    </Layout>
  )
}

export default productTemplate

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`
