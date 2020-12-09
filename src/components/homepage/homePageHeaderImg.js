import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
//import Img from "gatsby-image"
import Img from "gatsby-image/withIEPolyfill"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HomepageHeaderImage = ({ data, language }) => {
  const { t, i18n } = useTranslation("index")
  const headerImg = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/mlmv-homepage-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1700, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={'homepageHeaderImg contentStart'}>
        <div className="imgTxt">
          <span>{t("index:headerImgOverlay")}</span>
        </div>
        <Img fluid={headerImg.placeholderImage.childImageSharp.fluid}
          // objectFit="cover"
          // objectPosition="50% 50%"
          loading="lazy"
          alt="Banner image - Diasbled person in a wheelchair"
        />
      </div>
    </>
  )
}

export default HomepageHeaderImage