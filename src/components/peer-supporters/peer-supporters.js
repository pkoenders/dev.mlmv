import React from "react"
import FilterListResults from '../common/filterListResults'

const ListPeerSupporters = ({ data, location }) => {

    // Since we are creating a Template for language support, get Peer Supports data from node gatsby Node
    const { allSanityPeerSupporters } = data // data.markdownRemark holds your post data
    const peerListData = allSanityPeerSupporters
    const allPosts = peerListData.edges

    // Check if the tags filtering list has matching tags in the results. 
    // It is possible to create a tag in Sanity and not attached to a Peer supporter.
    // We don't want return an empty result
    const { allSanityTags } = data
    const listSanityTags = allSanityTags
    const allTags = listSanityTags.edges

    return (
        <FilterListResults allPosts={allPosts} allTags={allTags} location={location} />
    )
}
export default ListPeerSupporters