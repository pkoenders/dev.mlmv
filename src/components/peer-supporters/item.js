import React from "react"
import Img from 'gatsby-image'
import item from '../common/item.module.scss'
import BlockContent from "../common/blockContent"
import FormPeerSupporter from "../forms/formPeerSupporter"

const PeerSupporterItem = ({ data, location }) => {
  const { sanityPeerSupporters } = data
  const peerData = sanityPeerSupporters

  return (
    <>
      <div className={item.wrapper}>
        <div className={item.header}>
          <div className={item.headerWrapper}>

            <div className={item.headerTitle}>
              <span>
                <h1>{peerData.title.translate}</h1>
                <Img
                  fluid={peerData.coverImage.asset.fluid}
                  loading="lazy"
                />
              </span>
              {/* <span className={peerSupporterStyles.headerDesciption}> */}
              <p>{peerData.description.translate}</p>
              {/* </span> */}
            </div>


            <div className={item.headerInfo}>
              <ul className={item.tags}>
                {peerData.tags.map((edge, tagid) => (
                  <li key={tagid}>
                    <span>{edge.tagsTitle.translate}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className={item.content}>

          <div className={item.contentWrapper}>
            <div className={item.contentBlock}>
              <BlockContent blocks={peerData.longDescription.localized} />
            </div>

            <div className={item.contentComplementary}>

              <div className={item.supporterInfo}>
                {peerData.gender.genderTitle &&
                  <span><i className={"material-icons left"}>face</i>{peerData.gender.genderTitle.translate}</span>
                }
                {peerData.location.location.translate &&
                  <span><i className={"material-icons left"}>location_on</i>{peerData.location.location.translate}</span>
                }
              </div>
              <FormPeerSupporter data={data} location={location} peerEmail={peerData.email} peerName={peerData.title.translate.split(' ', 1)[0]} />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default PeerSupporterItem