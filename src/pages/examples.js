import React from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"

const examples = () => {
  return (
    <Layout>
      <h1>hello from examples page</h1>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

export default examples
