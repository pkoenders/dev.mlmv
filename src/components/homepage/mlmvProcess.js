import React from "react"
//import { Link } from "gatsby"
import mlmvProcessStyles from '../homepage/mlmvProcess.module.scss'
//import { useTranslation } from "react-i18next"

const MLMVProcessSection = () => {
    // const { t, i18n } = useTranslation("peerSupporters")
    // const tagsTranslate = i18n.language
    return (
        <>
            <section className={mlmvProcessStyles.supportSection + ' section-layout-wide'}>
                <div className={mlmvProcessStyles.supportSectionOutterWrapper}>
                    <div className={mlmvProcessStyles.supportSectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>1</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Talk with one of our connectors about your ideas and goals. Together you can start thinking about different opportunities.</p>
                        </div>
                    </div>
                </div>

                <div className={mlmvProcessStyles.supportSectionOutterWrapper}>
                    <div className={mlmvProcessStyles.supportSectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>2</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Decide who you want to support with your goals and budget.</p>
                        </div>
                    </div>
                </div>

                <div className={mlmvProcessStyles.supportSectionOutterWrapper}>
                    <div className={mlmvProcessStyles.supportSectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>3</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Make a plan and create a budget for your plan.</p>
                        </div>
                    </div>
                </div>

                <div className={mlmvProcessStyles.supportSectionOutterWrapper}>
                    <div className={mlmvProcessStyles.supportSectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>4</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Create an agreement with the people who will support you.</p>
                        </div>
                    </div>
                </div>

                <div className={mlmvProcessStyles.supportSectionOutterWrapper}>
                    <div className={mlmvProcessStyles.supportSectionInnerWrapper}>
                        <div className={mlmvProcessStyles.steps}>
                            <div>
                                <p>5</p>
                            </div>
                        </div>
                        <div className={mlmvProcessStyles.content}>
                            <p>Start getting the support you need to achieve your goals.</p>
                        </div>
                    </div>
                </div>


            </section >



        </>
    )
}

export default MLMVProcessSection
