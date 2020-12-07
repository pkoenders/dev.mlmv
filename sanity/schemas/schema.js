// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import images from './images'
import gender from './genderType'
import peerSupporters from './peer-supporters/peerSupporters'
import categories from './peer-supporters/categories'
import tags from './peer-supporters/tags'
//import author from './author'

import location from './peer-supporters/location'
import testCat from './testcat'

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

    peerSupporters,
    //author,

    categories,
    tags,
    gender,
    location,
    images,
    testCat,
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
