import {person} from './documents/person'
import {page} from './documents/page'
import { program } from './documents/program'
import {post} from './documents/post'
import { featureUpdate } from './documents/featureUpdate'
import {companyProfile} from './documents/companyProfile'
import {event} from './documents/event'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import { author } from './documents/author'
import { product } from './documents/product'

import { service } from './documents/service'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  companyProfile,
  event,
  // References
  post,
 program ,
 featureUpdate,
  person,

  service, author, product,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
