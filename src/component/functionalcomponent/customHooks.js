import { useEffect, useRef, useState } from "react";
import { isValidEmail, isValidUserName, isValidPassword } from '../../utils/validator';
export function useFormFieldValidatorCustomHook(value, type) {
    const [errorMessage, setErrorMessage] = useState();
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
        else {
            switch (type) {
                case 'username':
                    if (isValidUserName(value)) {
                        setErrorMessage('');
                    } else {
                        setErrorMessage("username cannot be empty & atleast 5 character");
                    }
                    break;
                case 'password':
                    if (isValidPassword(value)) {
                        setErrorMessage('');
                    } else {
                        setErrorMessage("password must not be empty & atleast 6 chatacter");
                    }
                    break;
                case 'email':
                    if (isValidEmail(value)) {
                        setErrorMessage('');
                    }
                    else {
                        setErrorMessage("Email must have @domainname.com");
                    }
                    break;
                default:
                    break;
            }
        }
    }, [value, type]);
    return errorMessage;
}

export function useEscapeIntialChange(value) {
    const [newValue, setNewValue] = useState(value);
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
        else {
            setNewValue(value);
        }
    }, [value]);
    return newValue;
}

