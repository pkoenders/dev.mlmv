import React from "react"
import SEO from "../seo"
import projectStyles from './project-item.module.scss'
import IconOpenExternal from "../../images/svg/icon-open-external.inline.svg"

//export default function ProjectTemplate({ data }) {
const ProjectTemplate = ({ data }) => {


  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  //const link = "http://" + frontmatter.url
  const link = frontmatter.url


  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #efeff0;
        }
      `}
      </style>
      <SEO title="Home" />
      <section className={projectStyles.sectionProject + ' section-layout-wide'}>
        <div className={projectStyles.sectionProjectWrapper}>

          <div className={projectStyles.content}>

            <div className={projectStyles.header}>
              <h1>{frontmatter.title}</h1>
              <p>
                {/* {frontmatter.category}<br /> */}
                {frontmatter.date}<br />
                <a href={link} title={frontmatter.title} target="_blank"><IconOpenExternal />{frontmatter.url}</a>
              </p>
            </div>

            <div
              className={projectStyles.contentInner}
              dangerouslySetInnerHTML={{ __html: html }}
            >
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default ProjectTemplate