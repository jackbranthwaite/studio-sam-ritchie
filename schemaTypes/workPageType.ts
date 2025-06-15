import {defineField, defineType} from 'sanity'

export const workPageType = defineType({
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'workTags',
      title: 'Work Tags',
      type: 'tags',
      options: {
        allowCreate: true,
        predefinedTags: [
          {label: 'Photography', value: 'photography'},
          {label: 'Videography', value: 'videography'},
          {label: 'SEO', value: 'seo'},
          {label: 'Marketing', value: 'marketing'},
        ],
      },
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'FlexibleContentContainer'}],
    }),
  ],
})
