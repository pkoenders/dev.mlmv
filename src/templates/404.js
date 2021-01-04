import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"
import Emoji from "../images/svg/emoji-rolling-eyes.inline.svg"
// import { useTranslation } from "react-i18next"

//import BackgroundImage from '../components/common/404Bground'

const NotFoundPage = ({ location }) => {
    // const { t, i18n } = useTranslation("404")


    const { t, i18n } = useTranslation("index")
    return (
        <>
            <style type="text/css">
                {`
                    body  {
                    background-color:  #121923;
                     }
                `}
            </style>

            <Layout location={location}>
                {/* <BackgroundImage /> */}

                <canvas class="catAnim" width="32" height="32"></canvas>

                <DefaultSection>
                    <div className={"fourOfour"}>
                        <h1>{t("common:404Title")}</h1>
                        <Emoji />
                        <p>{t("common:404Para")}</p>
                        <Link to={`/${i18n.language}`} className={'buttonSecondary'} >{t("common:404Cta")}</Link>
                    </div>
                </DefaultSection>
            </Layout>
        </>
    )
}

export default NotFoundPage