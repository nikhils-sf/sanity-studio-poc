import {defineField, defineType} from 'sanity'

export const heroTypes = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footerMsg',
      type: 'string',
    }),
  ],
})