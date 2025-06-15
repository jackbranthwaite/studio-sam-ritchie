import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {tags} from 'sanity-plugin-tags'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['homeType', 'menuType'])

export default defineConfig({
  name: 'default',
  title: 'Sam Ritchie',

  projectId: 'q0kxjat7',
  dataset: 'production',

  plugins: [
    tags({}),
    visionTool(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),

            S.listItem()
              .title('Menu')
              .id('menu')
              .child(S.document().schemaType('menu').documentId('menu')),
            // Regular document types
            S.documentTypeListItem('workPage').title('Work Page'),
            S.documentTypeListItem('page').title('Page'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes as any,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
