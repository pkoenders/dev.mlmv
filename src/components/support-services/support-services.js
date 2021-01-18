import React from "react"
import FilterListListResults from '../common/filterList&&listResults/filterList&&listResults'

const ListPeerSupporters = ({ data, location }) => {

    // Since we are creating a Template for language support, get Support Services data from node gatsby Node
    const { allSanitySupportServices } = data
    const servicesListData = allSanitySupportServices
    const allPosts = servicesListData.edges

    // Check if the tags filtering list has matching tags in the results. 
    // It is possible to create a tag in Sanity and not attached to a Peer supporter.
    // We don't want return an empty result
    const { allSanityTags } = data
    const listSanityTags = allSanityTags
    const allTags = listSanityTags.edges

    return (
        <FilterListListResults allPosts={allPosts} allTags={allTags} location={location} />
    )
}
export default ListPeerSupporters