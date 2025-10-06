import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'acceptedInsurance',
      title: 'Accepted Insurance Providers',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'reducedRate',
      title: 'Reduced Rate (without insurance)',
      type: 'number',
      initialValue: 125,
    }),
    defineField({
      name: 'fullFee',
      title: 'Full Fee (activist rate)',
      type: 'number',
      initialValue: 175,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
