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
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Main contact phone number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Main contact email address',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'string',
      description: 'Street address (e.g., 1225 Cypress Ave Suite 3 #V472)',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'string',
      description: 'City, State, ZIP (e.g., Los Angeles CA 90065)',
    }),
    defineField({
      name: 'supervisorName',
      title: 'Supervisor Name',
      type: 'string',
      description: 'Name and credentials (e.g., Hallie Gnatovich, LMFT #52775)',
    }),
    defineField({
      name: 'supervisorUrl',
      title: 'Supervisor Website URL',
      type: 'url',
      description: 'Link to supervisor website',
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