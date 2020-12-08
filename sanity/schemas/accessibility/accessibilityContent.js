export default {
  name: 'accessibilityContent',
  title: 'Accessibility content',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [

    {
      name: 'accessibilityContentActive',
      title: 'Is content active?',
      type: 'boolean'
    },

    {
      name: 'accessibilityContent',
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
        title: 'Accessibility content'
      }
    }
  }
}
