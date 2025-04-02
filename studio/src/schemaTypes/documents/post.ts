import {DocumentTextIcon, ImageIcon, UserIcon, TagIcon, CalendarIcon, StarIcon} from '@sanity/icons'
import { IconMap } from '@sanity/icons'

import {format, parseISO} from 'date-fns'
import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  icon: DocumentTextIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Appears below the title (max 120 characters)',
      validation: (rule) => rule.max(120).warning('Keep it concise'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serviceType',
      title: 'Service Category',
      type: 'reference',
      to: [{type: 'service'}],
      description: 'Which service does this post relate to?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Main post content with rich text formatting',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for previews (max 200 chars)',
      validation: (rule) => rule.max(200).required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      icon: ImageIcon,
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for SEO and accessibility',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional image credit/caption',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'datetime',
      icon: CalendarIcon,
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      icon: UserIcon,
      to: [{type: 'author'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      icon: CalendarIcon,
      description: 'Where this content is relevant (e.g., Dar es Salaam, Nairobi)',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      icon: TagIcon,
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
        list: [
          {title: 'Web Design', value: 'web-design'},
          {title: 'Catering', value: 'catering'},
          {title: 'Social Media', value: 'social-media'},
          {title: 'Events', value: 'events'},
          {title: 'Case Study', value: 'case-study'},
          {title: 'Tutorial', value: 'tutorial'},
          {title: 'Company News', value: 'news'},
        ]
      }
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Post',
      type: 'boolean',
      icon: StarIcon,
      initialValue: false,
      description: 'Feature this post on the homepage?',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for search engines (max 60 chars)',
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          description: 'Description for search engines (max 160 chars)',
          validation: (rule) => rule.max(160),
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: 'Oldest First',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [{field: 'isFeatured', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
      location: 'location',
      service: 'serviceType.title',
    },
    prepare({title, subtitle, media, author, date, location, service}) {
      const metadata = [
        author && `by ${author}`,
        service && `for ${service}`,
        location && `in ${location}`,
        date && `on ${format(parseISO(date), 'MMM d, yyyy')}`,
      ].filter(Boolean)

      return {
        title,
        subtitle: subtitle || metadata.join(' • '),
        media,
      }
    },
  },
})