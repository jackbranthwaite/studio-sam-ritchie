import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {vimeoField} from 'sanity-plugin-vimeo-field'
import {vimeoApi} from './src/environment'

export default defineConfig({
  name: 'default',
  title: 'Sam Ritchie',

  projectId: 'q0kxjat7',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    vimeoField({
      accessToken: vimeoApi,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
