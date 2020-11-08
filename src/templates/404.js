import React from "react"
import Layout from "../components/layout"
//import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const NotFoundPage = ({ location }) => {
    const { t, i18n } = useTranslation("404")
    return (
        <Layout location={location}>
            {/* <SEO title={"404: " + t("notFound")} /> */}
            <h1>Page not found placeholder</h1>
            {/* <h1>{t("notFound")}</h1>
            <p>{t("notFoundMessage")}</p> */}
        </Layout>
    )
}

export default NotFoundPage