
import { orderRankField } from '@sanity/orderable-document-list'

export default {
  name: 'offers',
  title: 'Offers',
  type: 'document',
  fields: [
    orderRankField({ type: "offers" }),
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'promo_note',
      title: 'Promo Note',
      type: 'string',
    },
    {
      name: 'how_to_redeem',
      title: 'How to Redeem',
      type: 'string',
    },
    {
      name: 'redeem_button_text',
      title: 'Redeem Button Text',
      type: 'string',
    },
    {
      name: 'redeem_url',
      title: 'Redeem URL',
      type: 'url',
    },
    {
      name: 'tall_image',
      title: 'Tall Image',
      type: 'image',
    },
    {
      name: 'wide_image',
      title: 'Wide Image',
      type: 'image',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'partner_perk',
      title: 'Partner Perk',
      type: 'boolean',
    },
    {
      name: 'overlay_color_hex',
      title: 'Overlay Color Hex',
      type: 'string',
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