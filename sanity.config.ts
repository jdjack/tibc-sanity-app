import { defineConfig } from 'sanity'
import { structureTool, StructureBuilder } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'


export default defineConfig({
  name: 'default',
  title: 'TIBC',

  projectId: 'p4tg2klf',
  dataset: 'production',

  plugins: [structureTool({
    structure: (S, context) => {
      return S.list()
        .title('Content')
        .items([
          ...S.documentTypeListItems().filter(
            (item) => item.getId() !== 'announcement' && item.getId() !== 'offers' && item.getId() !== 'mobile_banner' // Exclude 'announcement', 'offers', and 'mobile_banner'
          ),
          // Minimum required configuration
          orderableDocumentListDeskItem({ type: 'announcement', S, context }),
          orderableDocumentListDeskItem({ type: 'offers', S, context }),
          orderableDocumentListDeskItem({ type: 'mobile_banner', S, context }),
        ])
    },
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
