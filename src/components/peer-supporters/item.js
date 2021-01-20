import React from "react"
import Img from 'gatsby-image'
import peerSupporterStyles from './peerSupporter.module.scss'
import BlockContent from "../common/blockContent"
import FormPeerSupporter from "../forms/formPeerSupporter"

const PeerSupporterItem = ({ data, location }) => {
  const { sanityPeerSupporters } = data
  const peerData = sanityPeerSupporters

  return (
    <>
      <div className={peerSupporterStyles.peerSupporterWrapper}>
        <section className={peerSupporterStyles.header}>
          <div className={peerSupporterStyles.headerWrapper}>

            <div className={peerSupporterStyles.headerTitleWrapper}>
              <div className={peerSupporterStyles.headerTitle}>
                <span><h1>{peerData.title.translate}</h1>
                  <div className={peerSupporterStyles.headerProfileImg}>
                    <Img
                      fluid={peerData.coverImage.asset.fluid}
                      loading="lazy"
                    />
                  </div>
                </span>
                <div className={peerSupporterStyles.headerDesciption}>
                  <p>{peerData.description.translate}</p>
                </div>
              </div>

              <div className={peerSupporterStyles.contentTags}>
                <ul>
                  {peerData.tags.map((edge, tagid) => (
                    <li key={tagid}>
                      <span>{edge.tagsTitle.translate}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={peerSupporterStyles.content}>

          <div className={peerSupporterStyles.contentWrapper}>
            <div className={peerSupporterStyles.contentBlock}>
              <BlockContent blocks={peerData.longDescription.localized} />
            </div>

            <div className={peerSupporterStyles.contentComplementary}>

              <div className={peerSupporterStyles.supporterInfo}>
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
        </section>
      </div >
    </>
  )
}

export default PeerSupporterItem