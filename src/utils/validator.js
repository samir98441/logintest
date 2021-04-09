export const isValidUserName = function (userName = '') {
    if (userName.length < 5) {
        return false;
    }
    return true;
}

export const isValidPassword = function (password = 'a') {
    if (password.length < 5) {
        return false;
    }
    return true;
}

export const isValidEmail = function (email = 'a') {
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return false;
    }
    return true;
}