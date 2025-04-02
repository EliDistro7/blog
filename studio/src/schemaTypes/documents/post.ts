import {DocumentTextIcon} from '@sanity/icons'
import {format, parseISO} from 'date-fns'
import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  icon: DocumentTextIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional short description that appears below the title',
      validation: (rule) => rule.max(120).warning('Subtitle should be brief'),
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
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200).warning('Excerpt should be concise'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
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
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional image caption',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'person'}],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where this post is relevant (e.g., Dar es Salaam, Zanzibar)',
    }),
    defineField({
      name: 'program',
      title: 'Related Program',
      type: 'reference',
      to: [{type: 'program'}],
      description: 'Link to a specific SOA Tanzania program',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
        list: [
          {title: 'Cleanup', value: 'cleanup'},
          {title: 'Education', value: 'education'},
          {title: 'Conservation', value: 'conservation'},
          {title: 'Community', value: 'community'},
          {title: 'Research', value: 'research'},
        ]
      }
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
      description: 'Should this post be featured on the homepage?',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      authorFirstName: 'author.firstName',
      authorLastName: 'author.lastName',
      date: 'date',
      media: 'coverImage',
      location: 'location',
    },
    prepare({title, subtitle, media, authorFirstName, authorLastName, date, location}) {
      const metadata = [
        authorFirstName && authorLastName && `by ${authorFirstName} ${authorLastName}`,
        location && `in ${location}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return {
        title,
        subtitle: subtitle || metadata.join(' • '),
        media,
      }
    },
  },
})