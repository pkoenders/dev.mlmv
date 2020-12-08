
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import images from './images'

// Settings
import gender from './genderType'
import tags from './peer-supporters/tags'
import location from './peer-supporters/location'

// Homepage
import homepageIntro from './homepage/homepageIntro'
import communityComments from './homepage/communityComments'

//Peer Supporters
import peerSupporters from './peer-supporters/peerSupporters'

// Accessibility
import accessibilityContent from './accessibility/accessibilityContent'

//Locale Object Types
import localeString from './localeTypes/localeString'
import localeSlug from './localeTypes/localeSlug'
import localeBlockContent from './localeTypes/localeBlockContent'
import localeText from './localeTypes/localeText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    //Settings,
    tags,
    gender,
    location,
    images,

    //Homepage
    homepageIntro,
    communityComments,

    //Peer Supporters
    peerSupporters,

    // Accessibility
    accessibilityContent,

    //Local Types
    localeString,
    localeSlug,
    localeBlockContent,
    localeText,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas

    blockContent
  ])
})
