
import { orderRankField } from '@sanity/orderable-document-list'

export default {
  name: 'offers',
  title: 'Offers',
  type: 'document',
  fields: [
    orderRankField({ type: "offers" }),
    {
      name: 'name',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Offer Description',
      type: 'text',
    },
    {
      name: 'promo_note',
      title: 'Promo Tag (Always ALL CAPS)',
      type: 'string',
    },
    {
      name: 'promo_code',
      title: 'Promo Code (If applicable)',
      type: 'string',
    },
    {
      name: 'how_to_redeem',
      title: 'Subtitle',
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
      title: 'Tall Image (Priority)',
      type: 'image',
    },
    {
      name: 'wide_image',
      title: 'Wide Image (Required if Featured)',
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