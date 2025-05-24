import {defineField, defineType} from 'sanity'

export const menuType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Menu',
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{type: 'menuItem'}],
    }),
  ],
})
