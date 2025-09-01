import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'New Wave Therapy',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'A space where care is responsive, inclusive, and designed for you.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'approachText',
      title: 'Practice Approach',
      type: 'text',
      initialValue: 'Our practice is rooted in accessibility, diversity, and collaboration. We keep fees low, honor a wide range of identities, and bring the shared insight of our whole team into each client\'s care.',
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
    defineField({
      name: 'uniqueApproachHeadline',
      title: 'Unique Approach Headline',
      type: 'string',
      initialValue: 'What makes us unique?',
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
      name: 'teamDescription',
      title: 'Team Description',
      type: 'text',
      initialValue: 'While you\'ll choose the therapist who feels like the best fit for you, each of our interns is supported by the insight and collaboration of our whole team—so you benefit from many perspectives, not just one.',
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