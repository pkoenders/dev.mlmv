import S from '@sanity/desk-tool/structure-builder'


const hiddenDocTypes = listItem => ![
    "homepageIntro", "accessibilityContent"
].includes(listItem.getId())

export default () =>
    S.list()
        .title('Content')
        .items([

            S.listItem()
                .title('Settings')
                .child(
                    S.list()
                        .title('Settings')
                        .items([

                            S.listItem()
                                .title('Add or edit tags')
                                .schemaType('tags')
                                .child(S.documentTypeList('tags').title('Add or edit tags')),

                            S.listItem()
                                .title('Add or edit gender')
                                .schemaType('gender')
                                .child(S.documentTypeList('gender').title('Add or edit gender')),

                            S.listItem()
                                .title('Add or edit locations')
                                .schemaType('location')
                                .child(S.documentTypeList('location').title('Add or edit locations')),
                        ]),
                ),

            S.listItem()
                .title('Homepage')
                .child(
                    S.list()
                        .title('Homepage')
                        .items([

                            S.listItem()
                                .title('Edit intro')
                                .child(
                                    S.editor()
                                        .id('homepageIntro')
                                        .schemaType('homepageIntro'),

                                    ...S.documentTypeListItems()
                                        .filter(hiddenDocTypes)
                                ),

                            // S.listItem()
                            //     .title('Edit intro')
                            //     .schemaType('homepageIntro')
                            //     .child(S.documentTypeList('homepageIntro').title('Edit intro')),



                            S.listItem()
                                .title('Add or edit community comments')
                                .schemaType('communityComments')
                                .child(S.documentTypeList('communityComments').title('Add or edit community comments')),
                        ]),


                ),



            S.listItem()
                .title('Peer Supporters')
                .schemaType('peerSupporters')
                .child(S.documentTypeList('peerSupporters').title('Peer Supporters')),


            S.listItem()
                .title('Accessibility')
                .child(
                    S.editor()
                        .id('accessibilityContent')
                        .schemaType('accessibilityContent'),

                    ...S.documentTypeListItems()
                        .filter(hiddenDocTypes)
                ),

            // S.listItem()
            //     .title('Accessibility')
            //     .schemaType('accessibilityContent')
            //     .child(S.documentTypeList('accessibilityContent').title('Accessibility')),


        ])

