export default {
  name: 'gender',
  title: 'Gender',
  type: 'document',
  fields: [

    {
      name: 'genderTitle',
      title: 'Title',
      type: 'string'
    },

    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },

    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },

  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     media: 'mainImage'
  //   },
  // }
}
