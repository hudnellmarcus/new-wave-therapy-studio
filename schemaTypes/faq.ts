import {defineField, defineType} from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'faqCategory'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order within the category',
    }),
    defineField({
      name: 'isActive',
      title: 'Show on Site',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({  
    name: 'color',
    title: 'Color',
    type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category.title',
      order: 'displayOrder',
    },
    prepare(selection) {
      const {title, subtitle, order} = selection
      return {
        title,
        subtitle: `${subtitle} ${order ? `(${order})` : ''}`,
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