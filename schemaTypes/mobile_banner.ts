
import { orderRankField } from '@sanity/orderable-document-list'

export default {
  name: 'mobile_banner',
  title: 'Mobile Banner',
  type: 'document',
  fields: [
    orderRankField({ type: "mobile_banner" }),
    {
      name: 'bold_body_text',
      title: 'Bold Body Text',
      type: 'string',
    },
    {
      name: 'regular_body_text',
      title: 'Regular Body Text',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'is_active',
      title: 'Is Active',
      type: 'boolean',
    },
    {
      name: "supported_regions",
      title: "Supported Regions",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: [
          { title: "Singapore", value: "40863" },
          { title: "Hong Kong", value: "46798" },
          { title: "Indonesia", value: "126071" },
          { title: "Thailand", value: "144788" },
        ],
        layout: "grid",
      },
    }
  ],
}