const clientNames = require('./../../constants/constant.js')

async function isValidClient(state, event, {client}) {

    var c = await clientNames['clients'][client]

    var x =  {
        ...state,
        clientCode : c,
        authKey: c === 'RIVIGO' ? 'rivigo@123' : null,
        isValidClient : c === null || c === undefined ? false : true
    }
    return x;
}

module.exports =  {isValidClient}