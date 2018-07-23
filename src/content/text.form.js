module.exports = {
    id: 'customText',
    title : 'create your customText',
    renderer : '#customText',

    jsonSchema : {
        title : 'make new customText',
        type : 'object',
        properties : {
            text : {
                type: 'string'
            }


        }
    },

    computePreviewText: formData => 'Text: ' + formData.text
}