async function validateNumbers(state, event, numbers) {
    return true;
}


async function validateUserId(state, event, {inputText}) {
    return validateNumbers(state, event, inputText)
}


async function validatePhoneNumber(state, event, {inputPhoneNumber}) {

    var result = inputPhoneNumber != null && await validateNumbers(state, event, inputPhoneNumber) && inputPhoneNumber.length === 10;
    console.log('Phone number log ' + inputPhoneNumber +  result);
    return {
        ...state,
        isValidPhoneNumber:result
    }
}



async function validateOtp(state, event, {otp}) {
    console.log("otp" + otp)
    //make api call to the client and get validation in form of true or false
    var result = otp != null && await validateNumbers(state, event, otp) && otp.length === 4
    console.log("result " + result)
    if(result === true) {
        return {
            ...state,
            authKey:'zoom@123',
            isValidOtp: result
        }
    }else{
        return {
            ...state,
            authKey:null,
            isValidOtp: result
        }
    }

}

module.exports = {validateUserId, validatePhoneNumber, validateOtp, validateNumbers}