import React from "react"
import FilterListListResults from '../common/filterList&&listResults/filterList&&listResults'

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

    return (
        <FilterListListResults currentPage={currentPage} allPosts={allPosts} allTags={allTags} location={location} />
    )
}
export default ListPeerSupporters