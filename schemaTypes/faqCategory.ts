import {defineField, defineType} from 'sanity'

export const faqCategory = defineType({
  name: 'faqCategory',
  title: 'FAQ Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which categories appear on FAQ page',
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
      order: 'displayOrder',
    },
    prepare(selection) {
      const {title, order} = selection
      return {
        title,
        subtitle: order ? `Order: ${order}` : 'No order set',
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{field: 'displayOrder', direction: 'asc'}],
    },
  ],
})