import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import { useTranslation } from "react-i18next"
import Img from "gatsby-image"
//import Img from "gatsby-image/withIEPolyfill"
import homePageHeaderImg from '../homepage/homePageHeaderImg.module.scss'



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
  const active = data.sanityHomepageHeader.active

  //const { t } = useTranslation("index")
  // const headerImg = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "images/mlmv-homepage-banner.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1700, quality: 80) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  if (active === true) {
    return (
      <section className={homePageHeaderImg.homepageHeaderImg + ' contentStart'}>
        <div className={homePageHeaderImg.imgTxt}>
          <h1>{data.sanityHomepageHeader.title.translate}</h1>
        </div>
        <div className={homePageHeaderImg.img}>
          <Img
            fluid={data.sanityHomepageHeader.coverImage.asset.fluid}
            loading="lazy"
            alt={data.sanityHomepageHeader.coverImage.alt.translate}
          />
        </div>
      </section>
    )
  } else {
    return (
      <span className={homePageHeaderImg.spacer}></span>
    )
  }
}

export default HomepageHeaderImage