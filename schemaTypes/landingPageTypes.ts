import {defineField, defineType} from 'sanity'
import { postType } from './postType'

export const landingPageTypes = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      ...postType
    })
    
  ],
})