// schemas/vimeoEmbed.js
// Step 1: Basic schema without custom input

export default {
  name: 'vimeoEmbed',
  type: 'object',
  title: 'Vimeo Video',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Vimeo URL',
      description: 'Paste the full Vimeo URL here (e.g., https://vimeo.com/123456789)',
      validation: (Rule: any) =>
        Rule.required().custom((url: string) => {
          if (!url) return true
          // Check if it's a valid Vimeo URL
          const isValidVimeo = /vimeo\.com\/(?:.*\/)?(\d+)/.test(url)
          return isValidVimeo ? true : 'Please enter a valid Vimeo URL'
        }),
    },
    {
      name: 'title',
      type: 'text',
      title: 'Video Title',
      rows: 1,
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Video Description',
      validation: (rule: any) => rule.required(),
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare({url}: {url: string}) {
      // Extract video ID for preview
      const match = url?.match(/vimeo\.com\/(?:.*\/)?(\d+)/)
      const videoId = match ? match[1] : null

      return {
        title: videoId ? `Vimeo Video: ${videoId}` : 'Vimeo Video',
        subtitle: url,
      }
    },
  },
}
