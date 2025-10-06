import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'uniqueApproachHeadline',
      title: 'Unique Approach Headline',
      type: 'string',
      initialValue: 'What makes us unique?',
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      description: 'The main paragraph describing the practice approach',
    }),
    defineField({
      name: 'collaboration',
      title: 'Collaboration Description',
      type: 'text',
    }),
    defineField({
      name: 'diversity',
      title: 'Diversity Description',
      type: 'text',
    }),
    defineField({
      name: 'financialSupport',
      title: 'Financial Support Description',
      type: 'text',
    }),
    defineField({
      name: 'headlineText',
      title: 'Headline Text',
      type: 'string',
      description: 'Large headline on the left side',
    }),
    defineField({
      name: 'paragraphText',
      title: 'Paragraph Text',
      type: 'text',
      description: 'Paragraph below the headline on the left side',
    }),
    defineField({
      name: 'ourApproachQuote',
      title: 'Our Approach Quote',
      type: 'text',
      description: 'Quote displayed in the "Our Approach" box on the right',
    }),
    defineField({
      name: 'processSteps',
      title: 'Therapy Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'step',
              title: 'Step Number',
              type: 'number',
            }),
            defineField({
              name: 'description',
              title: 'Step Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
