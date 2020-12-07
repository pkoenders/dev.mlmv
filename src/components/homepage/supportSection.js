import React from "react"
import supportStyles from '../homepage/supportSection.module.scss'
import IllustrationSupport from "../../images/svg/illustration-support.inline.svg"

const SupportSection = () => {
    return (
        <section className={supportStyles.supportSection + ' section-layout-wide'}>
            <div className={supportStyles.supportSectionWrapper}>
                <div className={supportStyles.content}>
                    <p>Enabling good lives is about making it easier to for you to create a good life for yourself and those you support.</p>
                </div>

                <div className={supportStyles.image}>
                    <IllustrationSupport />
                </div>
            </div>
        </section >
    )
}

export default SupportSection
