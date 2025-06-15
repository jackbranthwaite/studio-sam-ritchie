import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'FlexibleContentContainer',
  title: 'Flexible Content Container',
  type: 'object',
  fields: [
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {type: 'dualImageBlock'},
        {type: 'singleImageBlock'},
        {type: 'vimeoEmbed'},
        {type: 'imageGalleryBlock'},
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      blocks: 'contentBlocks',
    },
    prepare({title, blocks = []}: {title?: string; blocks?: any[]}) {
      return {
        title: title || 'Flexible Content Container',
        subtitle: `${blocks.length} content block${blocks.length === 1 ? '' : 's'}`,
      }
    },
  },
})
