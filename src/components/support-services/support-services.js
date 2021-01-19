import React from "react"
import FilterListListResults from '../common/filterList&&listResults/filterList&&listResults'

const ListPeerSupporters = ({ data, location }) => {

    const { allSanitySupportServices } = data
    const servicesListData = allSanitySupportServices
    const allPosts = servicesListData.edges

    const { sanitySupportServicesHomepage } = data
    const pageData = sanitySupportServicesHomepage
    const currentPage = pageData

    const { allSanityTags } = data
    const listSanityTags = allSanityTags
    const allTags = listSanityTags.edges

    return (
        <FilterListListResults currentPage={currentPage} allPosts={allPosts} allTags={allTags} location={location} />
    )
}
export default ListPeerSupporters