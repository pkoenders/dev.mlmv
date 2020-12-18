import categories from "./categories";

export default {
  name: 'peerSupporters',
  title: 'Peer Supporters',
  type: 'document',
  fields: [

    {
      name: 'peerSupporterFullName',
      title: 'Peer supporter full name',
      type: 'localeString',

      // validation: Rule => [
      //   Rule.required().min(10).error('A title of min. 10 characters is required'),
      //   Rule.max(50).warning('Shorter titles are usually better')
      // ],
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(2).error('A of min. 2 characters is required'),
        }),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The url of the page',
      options: {
        source: 'peerSupporterFullName.en',
        maxLength: 96,
        //type: 'slug',
        // slugify: input => input
        //   .toLowerCase()
        //   .replace(/\s+/g, '-')
        //   .slice(0, 200)
      },
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(2).error('A of min. 2 characters is required'),
        }),
    },

    {
      name: 'peerSupporterActive',
      title: 'Is this peer supporter active?',
      type: 'boolean'
    },

    {
      name: 'peerSupporterAddToHomepage',
      title: 'Add to homepage',
      type: 'boolean'
    },


    {
      name: 'peerSupporterFriendlyName',
      title: 'Peer supporter first name',
      description: 'Peer supporter friendly name',
      type: 'localeString',
      // validation: Rule => [
      //   Rule.required().min(10).error('A title of min. 10 characters is required'),
      //   Rule.max(50).warning('Shorter titles are usually better')
      // ],
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(2).error('A of min. 2 characters is required'),
        }),
    },

    {
      name: 'peerSupporterEmail',
      title: 'Peer supporter email address',
      type: 'string',
      // validation: Rule => [
      //   Rule.required().min(10).error('A title of min. 10 characters is required'),
      //   Rule.max(50).warning('Shorter titles are usually better')
      // ],
      validation: Rule => [
        Rule.required().min(2).error('A title of min. 2 characters is required'),
      ],
    },

    {
      name: 'gender',
      title: 'Gender',
      type: 'reference',
      to: { type: 'gender' }
    },

    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: { type: 'location' }
    },

    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'images',
    },


    // {
    //   name: 'coverImage',
    //   title: 'Cover Image',
    //   type: 'reference',
    //   to: { type: 'images' }
    // },


    // {
    //   name: 'coverImage',
    //   title: 'Cover image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'caption',
    //       //type: 'string',
    //       type: 'localeString',
    //       title: 'Caption',
    //       options: {
    //         isHighlighted: true // <-- make this field easily accessible
    //       }
    //     },
    //     {
    //       // Editing this field will be hidden behind an "Edit"-button
    //       name: 'altText',
    //       // type: 'string',
    //       type: 'localeString',
    //       title: 'Alternative text',
    //       description: 'Important for SEO and accessibility',
    //       options: {
    //         isHighlighted: true // <-- make this field easily accessible
    //       }
    //     }
    //   ]
    // },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }]
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },

    {
      name: 'peerShortDescription',
      title: 'Short description',
      description: 'Please provide a short description for SEO and preview text',
      type: 'localeText',
      rows: 3,
      validation: Rule =>
        Rule.required({
          en: fieldRule => fieldRule.required().min(15).error('A title of min. 15 characters is required'),
        }),
    },

    {
      name: 'peerLongDescription',
      title: 'Long descriotion',
      //type: 'blockContent',
      type: 'localeBlockContent',
      description: 'Please provide a long description',
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
      title: 'peerSupporterFullName.en',
      //categories: 'categories.categories.categories.categoriesTitle',
      //categories: 'categories.categories',
      cat0: 'categories.0.categoriesTitle.en',
      cat1: 'categories.1.categoriesTitle.en',
      cat2: 'categories.2.categoriesTitle.en',
      cat3: 'categories.3.categoriesTitle.en',
      cat4: 'categories.4.categoriesTitle.en',


      //categories: 'location.location'
      //subtitle: 'location.location'
      //subtitle: 'categories.array.categories'
      //subtitle: 'categories.name'
      //author: 'author.name',
      // media: 'mainImage'
    },
    // prepare(selection) {
    //   const { title, categories } = selection
    //   return {
    //     title: title,
    //     subtitle: `Categories: ${categories ? categories : 'None'}`
    //   }
    // }


    prepare: ({ title, cat0, cat1, cat2, cat3, cat4 }) => {
      const cats = [cat0, cat1, cat2, cat3].filter(Boolean)
      const subtitle = cats.length > 0 ? `Categories: ${cats.join(', ')}` : ''
      const hasMorecats = Boolean(cat4)
      return {
        title,
        subtitle: hasMorecats ? `${subtitle}…` : subtitle
      }
    }
  }
}
