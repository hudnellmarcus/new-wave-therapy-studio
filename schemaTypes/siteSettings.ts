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
      name: 'teamDescription',
      title: 'Team Description',
      type: 'text',
      description: 'General team description used across the site',
      initialValue: 'While you\'ll choose the therapist who feels like the best fit for you, each of our interns is supported by the insight and collaboration of our whole team—so you benefit from many perspectives, not just one.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})