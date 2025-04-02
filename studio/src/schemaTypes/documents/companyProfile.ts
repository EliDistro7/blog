import {defineField, defineType} from 'sanity'
import {DesktopIcon} from '@sanity/icons'
import {EarthGlobeIcon, BookIcon,CaseIcon, HomeIcon, ClockIcon} from '@sanity/icons'

export const companyProfile = defineType({
  name: 'companyProfile',
  title: 'Company Profile',
  type: 'document',
  icon: DesktopIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Short Name/Abbreviation',
      type: 'string',
      description: 'Used when space is limited (e.g., in navigation)',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { 
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt'
        }
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'darkModeVersion',
          type: 'image',
          title: 'Dark Mode Version',
          description: 'Optional alternative logo for dark themes',
          options: { hotspot: true }
        }),
      ],
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short catchy phrase that represents your company',
    }),
    defineField({
      name: 'about',
      title: 'About Us',
      type: 'blockContent',
      description: 'Detailed company description',
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200).warning('Mission statements should be concise'),
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [{
        type: 'object',
        icon: () => '⭐',
        fields: [
          defineField({
            name: 'title',
            type: 'string',
            title: 'Value Name',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
          }),
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'description'
          }
        }
      }]
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ 
          name: 'email', 
          type: 'string',
          title: 'Primary Email',
          icon: CaseIcon,
          validation: (Rule) => Rule.email(),
        }),
        defineField({ 
          name: 'phone', 
          type: 'string',
          title: 'Primary Phone',
          icon: BookIcon,
        }),
        defineField({ 
          name: 'address', 
          type: 'text', 
          title: 'Physical Address',
          icon: HomeIcon,
          rows: 3 
        }),
        defineField({
          name: 'location',
          type: 'geopoint',
          title: 'Map Location',
          description: 'For maps integration',
        }),
        defineField({
          name: 'hours',
          type: 'array',
          title: 'Business Hours',
          icon: ClockIcon,
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'days',
                type: 'string',
                title: 'Days',
                options: {
                  list: [
                    {title: 'Monday', value: 'monday'},
                    {title: 'Tuesday', value: 'tuesday'},
                    // ... all weekdays
                    {title: 'Weekdays', value: 'weekdays'},
                    {title: 'Weekend', value: 'weekend'},
                    {title: 'Everyday', value: 'everyday'},
                  ]
                }
              }),
              defineField({
                name: 'hours',
                type: 'string',
                title: 'Hours (e.g., 9:00 AM - 5:00 PM)'
              }),
              defineField({
                name: 'closed',
                type: 'boolean',
                title: 'Closed?',
                initialValue: false
              })
            ],
            preview: {
              select: {
                days: 'days',
                hours: 'hours',
                closed: 'closed'
              },
              prepare({days, hours, closed}) {
                return {
                  title: days.charAt(0).toUpperCase() + days.slice(1),
                  subtitle: closed ? 'Closed' : hours
                }
              }
            }
          }]
        }),
        defineField({
          name: 'socialMedia',
          type: 'array',
          title: 'Social Media Links',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'platform',
                type: 'string',
                title: 'Platform',
                options: {
                  list: [
                    {title: 'Facebook', value: 'facebook'},
                    {title: 'Twitter', value: 'twitter'},
                    {title: 'Instagram', value: 'instagram'},
                    {title: 'LinkedIn', value: 'linkedin'},
                    {title: 'YouTube', value: 'youtube'},
                  ]
                }
              }),
              defineField({
                name: 'url',
                type: 'url',
                title: 'URL'
              })
            ],
            preview: {
              select: {
                platform: 'platform',
                url: 'url'
              },
              prepare({platform, url}) {
                return {
                  title: platform.charAt(0).toUpperCase() + platform.slice(1),
                  subtitle: url
                }
              }
            }
          }]
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          description: 'Title for search engines (leave blank to use company name)',
        }),
        defineField({
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          rows: 2,
          validation: (Rule) => Rule.max(160).warning('Optimal length is under 160 characters'),
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
        }),
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'logo',
    },
  },
})