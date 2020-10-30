export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    {
      name: 'location',
      title: 'Location',
      //type: 'string'
      type: 'localeString',
    },
  ],

  preview: {
    select: {
      title: 'location.en'
    }
  }

}
