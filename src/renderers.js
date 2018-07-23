module.exports = {
    customText : data => {

        console.log("data dekho " + data.text)
        return {

            text : data.text,
            typing : data.typing
        }
    },

    optionRenderer : data => {
        const language = data.state.language || 'Hindi';
        var txt = data.d1.map( d=> `<${d.payload}> ${d.text}`)
        console.log(txt)

        var x = {
            text : "choose",
            quick_replies: [ '<r> Please choose any option', '<r> कृपया कोई विकल्प चुनें'],
            typing: data.typing || '3s'

        }

        console.log(x)
        return x
    },


    translatedText : data => {
        const  language = data.state.language || 'Hindi'
        console.log(data)
        return {
            typing : true,
            text : data[`text${language}`]
        }
    }
}
