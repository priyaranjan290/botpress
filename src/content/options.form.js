var translatedText = require('../content_data/translatedtext.json')

module.exports = {
    id: 'options',
    title : 'options',
    renderer : '#optionRenderer',

    jsonSchema : {
        title : 'make new option',
        type : 'object',
        properties : {
            text : {
                type: 'array',
                items : {
                    type : 'string'
                }
            }
        }
    },

    computeData : formData => {
        const d1 = formData.text.map(i => ({payload : 'random', text: i}))
        console.log({d1})
        return {d1}
    },

    computePreviewText: formData => {
        var x = formData.text.toString()
        console.log(formData.text)
        console.log(x)
        return 'option : ' + x
    }
}