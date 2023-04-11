import {defineCliConfig} from 'sanity/cli'

const projectId = import.meta.VITE_APP_SANITY_ID;

export default defineCliConfig({
  api: {
    projectId: 'api8ljjp',
    dataset: 'production'
  }
})
