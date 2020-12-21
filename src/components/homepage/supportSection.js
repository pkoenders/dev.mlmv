import React from "react"
import { useTranslation } from "react-i18next"
import supportStyles from '../homepage/supportSection.module.scss'
import IllustrationSupport from "../../images/svg/illustration-support.inline.svg"

const SupportSection = () => {
    const { t, i18n } = useTranslation("index")
    return (
        <section className={supportStyles.supportSection + ' section-layout-wide'}>
            <div className={supportStyles.supportSectionWrapper}>
                <div className={supportStyles.content}>
                    <p>{t("index:supportSection")}</p>
                </div>

                <div className={supportStyles.image}>
                    <IllustrationSupport />
                </div>
            </div>
        </section >
    )
}

export default SupportSection
