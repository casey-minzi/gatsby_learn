import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"
import CookieConsent from 'react-cookie-consent'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CookieConsent location='bottom' buttonText='accept' cookieName='gatsby-gdpr-google-analytics'>
        cookie
      </CookieConsent>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
