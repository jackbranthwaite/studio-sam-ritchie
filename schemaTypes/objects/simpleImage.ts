import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'simpleImageBlock',
  title: 'Simple Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the image',
    }),
  ],
  preview: {
    select: {
      image: 'image',
      caption: 'caption',
    },
    prepare({image, caption}: {image: any; caption?: string}) {
      return {
        title: caption || 'Simple Image Block',
        subtitle: 'Simple image',
        media: image,
      }
    },
  },
})
