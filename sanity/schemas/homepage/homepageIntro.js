export default {
  name: 'homepageIntro',
  title: 'Homepage intro',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [

    {
      name: 'homepageIntroActive',
      title: 'Is content active?',
      type: 'boolean'
    },

    {
      name: 'homepageIntroContent',
      title: ' ',
      //type: 'blockContent',
      type: 'localeBlockContent',
    },

  ],

  preview: {
    select: {
      title: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'Home page intro'
      }
    }
  }
}
