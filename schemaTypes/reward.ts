
export default {
  name: 'reward',
  title: 'Reward',
  type: 'document',
  orderings: [
    {
      title: 'Visits Required, High to Low',
      name: 'visits_required_desc',
      by: [
        { field: 'visits_required', direction: 'desc' }
      ]
    },
  ],
  fields: [
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
      name: 'visits_required',
      title: 'Visits Required',
      type: 'number',
    },
    {
      name: 'number_of_redemptions',
      title: 'Number of Redemptions',
      description: 'How many times this reward can be redeemed (e.g. 30 times for monthly coffee)',
      type: 'number',
    },
    {
      name: 'days_to_expire',
      title: 'Days to Expire',
      description: 'How many days this reward is valid for (e.g. 30 days for monthly coffee)',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}