import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'singleImageBlock',
  title: 'Single Image Block',
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
    defineField({
      name: 'fullWidth',
      title: 'Full Width',
      type: 'boolean',
      description: 'Display the image at full width',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      image: 'image',
      caption: 'caption',
    },
    prepare({image, caption}: {image: any; caption?: string}) {
      return {
        title: caption || 'Single Image Block',
        subtitle: 'Single image',
        media: image,
      }
    },
  },
})
