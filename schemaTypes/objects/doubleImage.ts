import {defineField, defineType} from 'sanity'

export const doubleImage = defineType({
  name: 'doubleImage',
  title: 'Double Image',
  type: 'object',
  fields: [
    defineField({
      name: 'imageLeft',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageRight',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})
