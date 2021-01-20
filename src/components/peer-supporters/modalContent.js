import React from "react"
import modalContent from '../layout.module.scss'
import SecondayNav from './secondaryNav'
import DefaultWrapper from "../defaultWrapper"
import BlockContent from "../common/blockContent"





const Modal = ({ location, currentPage, toggleModal }) => {

    return (
        <>
            <section className={modalContent.modalContent + ' modalContent'} >
                <SecondayNav toggleModal={toggleModal} location={location} />
                <DefaultWrapper>
                    <div className={modalContent.wrapper}>
                        <h1>{currentPage.title.translate}</h1>
                        <BlockContent blocks={currentPage.content.localized} />
                    </div>
                </DefaultWrapper>
            </section>
        </>
    )
}

export default Modal