import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>title: {title}</h2>
      <h2>name: {name}</h2>
    </div>
  )
}

export default Header

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
