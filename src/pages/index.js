import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default () => (
  <Layout>
    <h1 style={{ color: "green", textTransform: "uppercase" }}>
      Hello from gatsby
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a eros at
      lacus scelerisque tempus. Aenean malesuada quam sit amet nulla tincidunt,
      non luctus enim rutrum. Phasellus fringilla pellentesque dui, fringilla
      porta leo tempor ac. Nulla vel faucibus purus, vitae rhoncus sapien. Orci
      varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Nullam nec nunc non augue tempor lacinia at sollicitudin
      metus. Etiam in nisl a enim lacinia bibendum at nec sem. Morbi porttitor
      finibus lorem at cursus. Nulla vel nulla congue, auctor ligula vitae,
      pharetra tortor.
    </p>
    <ExampleButton>click me</ExampleButton>
  </Layout>
)
