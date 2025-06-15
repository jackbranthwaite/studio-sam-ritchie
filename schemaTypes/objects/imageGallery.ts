import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'imageGalleryBlock',
  title: 'Image Gallery Block',
  type: 'object',
  fields: [
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'simpleImageBlock'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
