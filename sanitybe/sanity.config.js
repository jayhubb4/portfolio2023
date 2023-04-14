import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { colorInput } from '@sanity/color-input';

const projectId = import.meta.VITE_APP_SANITY_ID;


export default defineConfig({
  name: 'default',
  title: 'portfolio2023',

  projectId: 'api8ljjp',
  dataset: 'production',

  plugins: [
      deskTool(), 
      visionTool(),
      colorInput()
    ],

  schema: {
    types: schemaTypes,
  },
})
