import {defineField, defineType} from 'sanity'

export const therapistType = defineType({
  name: 'therapist',
  title: 'Therapist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g. Licensed Clinical Social Worker, Marriage & Family Therapist',
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
      description: 'e.g. LCSW, LMFT, Ph.D.',
    }),
    defineField({
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'specializations',
      title: 'Specializations',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      description: 'e.g. she/her, they/them, he/him',
    }),
    defineField({
      name: 'website',
      title: 'Personal Website',
      type: 'url',
      description: 'Link to personal therapy website',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'education',
      title: 'Training/Education',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Educational background and training',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Team Member',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isAlumni',
      title: 'Alumni Member',
      type: 'boolean',
      initialValue: false,
      description: 'Past associate who is now licensed',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display on team page',
    }),
  ],
})