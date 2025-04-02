

import {RocketIcon, CodeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const featureUpdate = defineType({
  name: 'featureUpdate',
  title: 'Feature Update',
  icon: RocketIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Feature Name',
      type: 'string',
      validation: (rule) => rule.required().max(80)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{type: 'product'}],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'version',
      title: 'Version Number',
      type: 'string',
      description: 'e.g. v2.1.0',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'updateType',
      title: 'Update Type',
      type: 'string',
      options: {
        list: [
          {title: 'New Feature', value: 'feature'},
          {title: 'Improvement', value: 'improvement'},
          {title: 'Bug Fix', value: 'fix'}
        ],
        layout: 'radio'
      },
      initialValue: 'feature'
    }),
    defineField({
      name: 'summary',
      title: 'Brief Summary',
      type: 'text',
      rows: 2,
      description: 'One-line description for changelog listings',
      validation: (rule) => rule.required().max(120)
    }),
    defineField({
      name: 'details',
      title: 'Technical Details',
      type: 'blockContent',
      description: 'Full documentation of the feature'
    }),
    defineField({
      name: 'documentationLink',
      title: 'Documentation URL',
      type: 'url'
    }),
    defineField({
      name: 'relatedTutorial',
      title: 'Related Tutorial',
      type: 'reference',
      to: [{type: 'post'}],
      description: 'Link to a blog post explaining this feature'
    }),
    defineField({
      name: 'isHighlight',
      title: 'Major Feature?',
      type: 'boolean',
      description: 'Should this appear in highlight communications?',
      initialValue: false
    })
  ],
  orderings: [
    {
      title: 'Release Date, Newest',
      name: 'releaseDateDesc',
      by: [{field: 'releaseDate', direction: 'desc'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      product: 'product.name',
      version: 'version',
      date: 'releaseDate',
      type: 'updateType'
    },
    prepare({title, product, version, date, type}) {
      const subtitles = [
        product && `${product}`,
        version && `v${version}`,
        date && `Released ${date}`,
        type && `Type: ${type}`
      ].filter(Boolean)

      return {
        title,
        subtitle: subtitles.join(' • ')
      }
    }
  }
})