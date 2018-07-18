module.exports = {
    renderer1 : data => {

        console.log("data dekho " + data.text)
        return {

            text : data.text,
            typing : data.typing
        }
    }
}
