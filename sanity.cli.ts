import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'samritchie',
  api: {
    projectId: 'q0kxjat7',
    dataset: 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
