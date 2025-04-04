// schemas/documents/tag.ts
import { defineField, defineType } from 'sanity'
import { HashIcon } from '@sanity/icons'

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: HashIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tag Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
  ],
})