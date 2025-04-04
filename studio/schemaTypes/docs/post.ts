// schemas/documents/post.ts
import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // Language version selector (optional for migration)
    defineField({
      name: 'language',
      title: 'Language (Legacy - Deprecated)',
      type: 'string',
      description: 'This field is being phased out. Use the dedicated language versions below.',
      readOnly: true,
      hidden: true
    }),

    // English Version
    defineField({
      name: 'englishVersion',
      title: 'English Version',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        }),
        defineField({
          name: 'excerpt',
          title: 'Excerpt',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.max(200)
        }),
        defineField({
          name: 'body',
          title: 'Body Content',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image' }
          ]
        })
      ]
    }),

    // Kiswahili Version
    defineField({
      name: 'kiswahiliVersion',
      title: 'Kiswahili Version',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Kichwa',
          type: 'string'
        }),
        defineField({
          name: 'subtitle',
          title: 'Mada Ndogo',
          type: 'string'
        }),
        defineField({
          name: 'excerpt',
          title: 'Dondoo',
          type: 'text',
          rows: 3
        }),
        defineField({
          name: 'body',
          title: 'Maudhui',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image' }
          ]
        })
      ]
    }),

    // Shared Fields
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => doc.englishVersion?.title || doc.kiswahiliVersion?.title || 'untitled',
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    }),

    defineField({
      name: 'serviceType',
      title: 'Service Type',
      type: 'reference',
      to: [{ type: 'serviceType' }],
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }]
    }),

    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'datetime'
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    })
  ],
  preview: {
    select: {
      enTitle: 'englishVersion.title',
      swTitle: 'kiswahiliVersion.title',
      media: 'coverImage'
    },
    prepare({ enTitle, swTitle, media }) {
      return {
        title: enTitle || swTitle || 'Untitled post',
        subtitle: enTitle && swTitle ? 'Bilingual post' : enTitle ? 'English' : 'Kiswahili',
        media
      }
    }
  }
})