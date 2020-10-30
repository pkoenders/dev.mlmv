export default {
  name: 'tags',
  title: 'Tags',
  type: 'document',
  fields: [
    {
      name: 'tagsTitle',
      title: 'Title',
      //type: 'string'
      type: 'localeString',
    },

    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],

  preview: {
    select: {
      title: 'tagsTitle.en'
    }
  }

}
