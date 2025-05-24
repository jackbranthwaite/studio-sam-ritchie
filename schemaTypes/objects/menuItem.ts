import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    defineField({
      name: 'linksTo',
      title: 'Links To',
      type: 'reference',
      to: [{type: 'page'}, {type: 'categoryPage'}],
    }),
  ],
})
