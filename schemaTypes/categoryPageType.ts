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
    defineField({
      name: 'stillsContent',
      type: 'array',
      of: [{type: 'doubleImage'}, {type: 'fullWidthImage'}],
    }),
    defineField({
      name: 'videosTitleImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoGallery',
      type: 'array',
      of: [{type: 'video'}],
    }),
  ],
})
