import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = import.meta.VITE_APP_SANITY_ID;


export default defineConfig({
  name: 'default',
  title: 'portfolio2023',

  projectId: 'api8ljjp',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
