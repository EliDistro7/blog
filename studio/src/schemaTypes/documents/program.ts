
// schemas/documents/program.ts
import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const program = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Program Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'location',
      title: 'Primary Location',
      type: 'string',
      description: 'Main region in Tanzania where this program operates',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'ongoing',
      title: 'Ongoing Program?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location',
      media: 'coverImage',
    },
    prepare({ title, media, location }) {
      return {
        title,
        subtitle: location || 'No location specified',
        media,
      }
    },
  },
})