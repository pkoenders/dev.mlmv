import React from "react"

const ListResultsTags = ({ edge }) => {
    //const { t } = useTranslation("peerSupporters")
    return (
        <>
            {edge.node.tags.map((thisEdge, tagID) => (
                <li
                    className={""}
                    key={tagID}
                >
                    {thisEdge.tagsTitle.translate}
                </li>
            ))}
        </>
    )
}

export default ListResultsTags