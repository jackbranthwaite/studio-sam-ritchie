import {defineField, defineType} from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      title: 'Vimeo',
      name: 'vimeo',
      type: 'vimeo',
      options: {
        fields: ['metadata'],
      },
    }),
  ],
})
