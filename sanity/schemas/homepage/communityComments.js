export default {
  name: 'communityComments',
  title: 'Community comments',
  type: 'document',
  fields: [
    {
      name: 'communityCommentFullName',
      title: 'Full name',
      description: 'Will not be displayed on website',
      type: 'localeString',
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
        }),
    },

    {
      name: 'communityCommentActive',
      title: 'Is this comment active?',
      type: 'boolean'
    },

    {
      name: 'communityCommentAddToHomepage',
      title: 'Add to homepage',
      type: 'boolean'
    },


    {
      name: 'communityCommentFriendlyName',
      title: 'First name',
      description: 'Friendly name (to be displayed on website)',
      type: 'localeString',
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(2).error('A title of min. 2 characters is required'),
        }),
    },

    {
      name: 'communityCommentEmail',
      title: 'Email address',
      type: 'string',
    },


    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MMM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },

    {
      name: 'communityComment',
      title: 'Short user comment',
      type: 'localeText',
      rows: 3,
      validation: Rule =>
        Rule.required({
          en: fieldRule => fieldRule.required().min(15).error('A title of min. 15 characters is required'),
        }),
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
      title: 'communityCommentFullName.en',
      date: 'publishedAt'
    },
    prepare(selection) {
      const { title, date } = selection
      return {
        title: title,
        subtitle: date.split('T')[0] // YYYY-MM-DD --> YYYY
      }
    }
  }

}
