
export default {
  name: 'app_club',
  title: 'Club',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Link',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'momence_id',
      title: 'Momence ID',
      type: 'string',
    },
    {
      name: 'momence_tag',
      title: 'Momence Tag',
      type: 'string',
    },
    {
      name: 'kisi_lock_id',
      title: 'Kisi Lock ID',
      type: 'string',
    },
    {
      name: "location_group",
      title: "Location Group",
      description: "Pick location of the club",
      type: "string",
      options: {
        list: [
          { title: "Singapore", value: "Singapore" },
          { title: "Hong Kong", value: "Hong Kong" },
          { title: "London", value: "London" },
        ],
      },
    },
    {
      name: "timezone",
      title: "Timezone",
      description: "Choose the timezone for the club",
      type: "string",
      options: {
        list: [
          { title: "Asia/Singapore", value: "Asia/Singapore" },
          { title: "Asia/Hong_Kong", value: "Asia/Hong_Kong" },
          { title: "Europe/London", value: "Europe/London" },
        ],
      },
    },
    {
      name: 'background_image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: false,
      }
    }
  ]
}