// schemas/documents/serviceType.ts
import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const serviceType = defineType({
  name: 'serviceType',
  title: 'Service Type',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
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
    defineField({
      name: 'color',
      title: 'Color Class',
      type: 'string',
      description: 'Tailwind color utility (e.g., bg-brand-accent)',
      initialValue: 'bg-brand-blue',
    }),
  ],
})