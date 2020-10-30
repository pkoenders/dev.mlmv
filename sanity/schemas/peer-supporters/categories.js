export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'categoriesTitle',
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
      title: 'categoriesTitle.en'
    }
  }

}


