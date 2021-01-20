import React, { useState } from "react"
import FilterListListResults from '../common/filterList&&listResults/filterList&&listResults'
import ModalContent from './modalContent'




const ListPeerSupporters = ({ data, location }) => {

    const { allSanityPeerSupporters } = data
    const peerListData = allSanityPeerSupporters
    const allPosts = peerListData.edges

    const { sanityPeerSupportersHomepage } = data
    const pageData = sanityPeerSupportersHomepage
    const currentPage = pageData

    const { allSanityTags } = data
    const listSanityTags = allSanityTags
    const allTags = listSanityTags.edges

    const [modalStatus, setModalStatus] = useState(false)
    function toggleModal() {
        window.scrollTo(0, 0)
        setModalStatus(!modalStatus)
    }

    return (
        <>
            {!modalStatus
                ? <FilterListListResults toggleModal={toggleModal} currentPage={currentPage} allPosts={allPosts} allTags={allTags} location={location} />
                : <ModalContent toggleModal={toggleModal} currentPage={currentPage} />
            }
        </>
    )
}
export default ListPeerSupporters