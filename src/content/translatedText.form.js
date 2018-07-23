module.exports = {
    id: 'translatedText',
    title : 'translatedText',
    renderer : '#translatedText',

    jsonSchema : {
        title : 'make new translation',
        description : 'text messages with translations',
        type : 'object',


        properties : {
            textEnglish : {
                type: 'string', title : 'English text'
            },

            textHindi : {
                type: 'string', title : 'Hindi text'
            }
        }
    },

    computeData : formData => {
        return formData
    },

    computePreviewText: formData => {
        return formData.textEnglish + " / " + formData.textHindi
    }
}