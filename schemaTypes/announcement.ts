
import { orderRankField } from '@sanity/orderable-document-list'


export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    orderRankField({ type: "announcement" }),

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'background_image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'detail_subtitle',
      title: 'Detail Subtitle (when tapped)',
      type: 'string',
    },
    {
      name: 'detail_text',
      title: 'Detail Text (when tapped)',
      type: 'text',
    },
    {
      name: 'button_text',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
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
        ],
        layout: "grid",
      },
    }
  ]
}