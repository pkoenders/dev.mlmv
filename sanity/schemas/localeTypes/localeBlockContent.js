const supportedLanguages = [
    { id: "en", title: "English", isDefault: true },
    { id: "mi", title: "Te Reo Māori" },
    { id: "sm", title: "Samoan" },
    { id: "cmn", title: "Mandarin Chinese" },
    { id: "hi", title: "Hindi" },
    // Add as many languages as you need to support
]

//import supportedLanguages from './localeLanguages'

export default {
    name: "localeBlockContent",
    type: "object",
    fieldsets: [
        {
            title: "Translations",
            name: "translations",
            options: { collapsible: true },
        },
    ],
    fields: supportedLanguages.map(lang => (
        {
            title: lang.title,
            name: lang.id,
            type: "blockContent",
            fieldset: lang.isDefault ? null : "translations",
        }

    )),
}