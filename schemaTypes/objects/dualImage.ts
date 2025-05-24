import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'dualImageBlock',
  title: 'Dual Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'leftImage',
      title: 'Left Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rightImage',
      title: 'Right Image',
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
      description: 'Optional caption for the image pair',
    }),
  ],
  preview: {
    select: {
      leftImage: 'leftImage',
      rightImage: 'rightImage',
      caption: 'caption',
    },
    prepare({leftImage, rightImage, caption}: {leftImage: any; rightImage: any; caption?: string}) {
      return {
        title: caption || 'Dual Image Block',
        subtitle: 'Left and right images',
        media: leftImage,
      }
    },
  },
})
