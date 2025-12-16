
export default {
  name: 'club_tier',
  title: 'Club Tier',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'min_visits',
      title: 'Minimum Visits',
      type: 'number',
    },
    {
      name: 'max_visits',
      title: 'Maximum Visits',
      type: 'number',
    },
    {
      name: "card_type",
      title: "Card Type",
      description: "Choose the card to show in the app",
      type: "string",
      options: {
        list: [
          { title: "silver", value: "silver" },
          { title: "gold", value: "gold" },
          { title: "black", value: "black" },
        ],
      },
    }
  ]
}