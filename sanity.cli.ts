import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'p4tg2klf',
    dataset: 'production'
  },
  deployment: {
    appId: 'bvsd667wxtuwim27ci0x1abj',
    autoUpdates: true,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
})
