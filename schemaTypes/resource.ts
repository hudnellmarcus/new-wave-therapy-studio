import {defineField, defineType} from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Resource Category',
      type: 'string',
      options: {
        list: [
          {title: 'Energy Work', value: 'energy-work'},
          {title: 'Ayurveda', value: 'ayurveda'},
          {title: 'Retreats', value: 'retreats'},
          {title: 'Meditation Groups', value: 'meditation'},
          {title: 'Financial Support', value: 'financial'},
          {title: 'EMDR Specialists', value: 'emdr'},
          {title: 'Ketamine Treatment', value: 'ketamine'},
          {title: 'Specialized Workshops', value: 'workshops'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'costLevel',
      title: 'Cost Level',
      type: 'string',
      options: {
        list: [
          {title: 'Free', value: 'free'},
          {title: '$', value: 'low'},
          {title: '$$', value: 'medium'},
          {title: '$$$', value: 'high'},
        ],
      },
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., Black and non-binary, Queer/Trans/POC, Asian, Spanish speakers, etc.',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order within category',
    }),
    defineField({
      name: 'isActive',
      title: 'Show on Site',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      cost: 'costLevel',
    },
    prepare(selection) {
      const {title, category, cost} = selection
      return {
        title,
        subtitle: `${category} ${cost ? `(${cost})` : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Category, then Order',
      name: 'categoryOrder',
      by: [{field: 'category', direction: 'asc'}, {field: 'displayOrder', direction: 'asc'}],
    },
  ],
})