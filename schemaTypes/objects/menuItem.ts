export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Menu Title',
      type: 'string',
      description: 'The display text for this menu item',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'reference',
      title: 'Page Reference',
      type: 'reference',
      to: [{type: 'page'}, {type: 'categoryPage'}],
      description: 'Select a page or category page to link to',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Used to sort menu items (lower numbers appear first)',
    },
    {
      name: 'isVisible',
      title: 'Visible in Menu',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide this menu item',
    },
  ],
  preview: {
    select: {
      title: 'title',
      referenceTitle: 'reference.title',
      referenceType: 'reference._type',
    },
    prepare({
      title,
      referenceTitle,
      referenceType,
    }: {
      title: string
      referenceTitle: string
      referenceType: string
    }) {
      return {
        title: title,
        subtitle: `${referenceType}: ${referenceTitle || 'Untitled'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
}
