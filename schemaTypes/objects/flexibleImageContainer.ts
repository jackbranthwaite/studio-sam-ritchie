import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'flexibleImageContainer',
  title: 'Flexible Image Container',
  type: 'object',
  fields: [
    defineField({
      name: 'imageBlocks',
      title: 'Image Blocks',
      type: 'array',
      of: [{type: 'dualImageBlock'}, {type: 'singleImageBlock'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      blocks: 'imageBlocks',
    },
    prepare({title, blocks = []}: {title?: string; blocks?: any[]}) {
      return {
        title: title || 'Flexible Image Container',
        subtitle: `${blocks.length} image block${blocks.length === 1 ? '' : 's'}`,
      }
    },
  },
})
