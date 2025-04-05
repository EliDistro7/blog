// schemas/documents/post.ts
import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // Language versions (both will be visible at all times)
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
            {
              type: 'image',
              fields: [
                defineField({
                  name: 'caption',
                  title: 'Caption',
                  type: 'string'
                }),
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string'
                })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: 'kiswahiliVersion',
      title: 'Kiswahili Version',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Kichwa',
          type: 'string',
          validation: (rule) => rule.required()
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
          rows: 3,
          validation: (rule) => rule.max(200)
        }),
        defineField({
          name: 'body',
          title: 'Maudhui',
          type: 'array',
          of: [
            { type: 'block' },
            {
              type: 'image',
              fields: [
                defineField({
                  name: 'caption',
                  title: 'Maelezo',
                  type: 'string'
                }),
                defineField({
                  name: 'alt',
                  title: 'Maandishi Mbadala',
                  type: 'string'
                })
              ]
            }
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
        source: 'englishVersion.title',
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text (English)',
          type: 'string'
        }),
        defineField({
          name: 'altSw',
          title: 'Maandishi Mbadala (Kiswahili)',
          type: 'string'
        })
      ]
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
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'englishVersion.title',
      kiswahiliTitle: 'kiswahiliVersion.title',
      service: 'serviceType.title',
      date: 'date',
      media: 'coverImage'
    },
    prepare({ title, kiswahiliTitle, service, date, media }) {
      return {
        title: title || kiswahiliTitle,
        subtitle: `${service || 'No service'} • ${date ? new Date(date).toLocaleDateString() : 'No date'}`,
        media
      }
    }
  }
})