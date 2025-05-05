import {defineField, defineType} from 'sanity'

export const fullWidthImage = defineType({
  name: 'fullWidthImage',
  title: 'Full Width Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})
