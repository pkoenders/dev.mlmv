export default {
    name: 'images',
    title: 'Images',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        // {
        //     name: 'title',
        //     title: 'Title',
        //     //type: 'string'
        //     type: 'localeString',
        //     options: {
        //         isHighlighted: true // <-- make this field easily accessible
        //     }
        // },

        {
            name: 'alt',
            title: 'Alternative Text',
            //type: 'string'
            type: 'localeString',
            description: 'Important for SEO and accessibility',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },


        // {
        //     name: 'mainImage',
        //     title: 'Main image',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     },
        //     fields: [
        //         {
        //             name: 'caption',
        //             //type: 'string',
        //             type: 'localeString',
        //             title: 'Caption',
        //             options: {
        //                 isHighlighted: true // <-- make this field easily accessible
        //             }
        //         },
        //         {
        //             // Editing this field will be hidden behind an "Edit"-button
        //             name: 'altText',
        //             // type: 'string',
        //             type: 'localeString',
        //             title: 'Alternative text',
        //             description: 'Important for SEO and accessibility',
        //             options: {
        //                 isHighlighted: true // <-- make this field easily accessible
        //             }
        //         }
        //     ]
        // },

        {
            name: 'order',
            title: 'Order',
            type: 'number',
            hidden: true,
        },

    ],

    preview: {
        select: {
            title: 'imageTitle.en',
            media: 'mainImage'
        },
    }
}
