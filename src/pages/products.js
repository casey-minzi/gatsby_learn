import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

const ImageContainer = styled.div`
  width: 250px;
`

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => (
          <article key={product.id}>
            <ImageContainer>
              <Image fluid={product.image.fluid} alt={product.title} />
            </ImageContainer>
            <h3>
              {product.title} <span>£{product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>more details</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default products

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`
