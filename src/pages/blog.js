import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
          eros at lacus scelerisque tempus. Aenean malesuada quam sit amet nulla
          tincidunt, non luctus enim rutrum. Phasellus fringilla pellentesque
          dui, fringilla porta leo tempor ac. Nulla vel faucibus purus, vitae
          rhoncus sapien. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Nullam nec nunc non augue tempor
          lacinia at sollicitudin metus. Etiam in nisl a enim lacinia bibendum
          at nec sem. Morbi porttitor finibus lorem at cursus. Nulla vel nulla
          congue, auctor ligula vitae, pharetra tortor.
        </p>
      </div>
    </Layout>
  )
}

export default blog
