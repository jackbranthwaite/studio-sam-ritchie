import {defineField, defineType} from 'sanity'

export const categoryPageType = defineType({
  name: 'categoryPage',
  title: 'Category Page',
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
      name: 'stillsTitleImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stillsGallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'flexibleImageContainer'}],
    },
    defineField({
      name: 'videosTitleImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoGallery',
      title: 'Video Gallery',
      type: 'array',
      of: [{type: 'vimeoEmbed'}],
    }),
  ],
})
