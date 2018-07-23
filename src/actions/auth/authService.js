
async  function authenticateUser(state, event) {
    var authKey = state.authKey;
    var clientCode  = state.clientCode;
    console.log(authKey)
    console.log(clientCode)
    if( authKey === null) {
        return {
            ...state,
            isGuest : true,
            isAuthenticated:false
        }
    } else {
        return {
            ...state,
            isGuest : false,
            isAuthenticated: true
        }
    }
}


async function authenticateUserKey(state, event, {clientName, authKey}) {
    //make API call
    return authKey === 'rivigo@123' && clientName === 'RIVIGO'
}


async function authenticateGuestUser() {
    //show msg : "pls enter phone number for otp"

    //send otp
    var otp = 1234

    //msg display : "enter otp"

    //get input from usr
    var userInput = 1234

    //match and return
    return otp === userInput

}

async function setAutheticated(state, event, {isAuthDone}) {
    var authKey = state.authKey;
    console.log("isAuthtDOne  ||  authKey" + isAuthDone + "  - " + authKey);
    var result = isAuthDone;
    return {
        ...state,
        authKey:authKey,
        isAuthenticated:result
    }
}

module.exports = {authenticateUser, setAutheticated}