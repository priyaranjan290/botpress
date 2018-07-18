module.exports = {
    id: 'bhadwa',
    title : 'maa ki choo',
    renderer : '#renderer1',

    jsonSchema : {
        title : 'make new message ma ki choo',
        type : 'object',
        properties : {
            text : {
                type: 'string'
            }


        }
    },

    computePreviewText: formData => 'Text: ' + formData.text
}