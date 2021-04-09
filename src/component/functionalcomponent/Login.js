import React, { useEffect, useRef, useState } from 'react';
import { useFormFieldValidatorCustomHook } from './customHooks';
import '../../login.css';

function LoginForm(props) {
    const isFirstRender = useRef(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogedIn, setIsLogedin] = useState(false);
    const [isFormValid, setIsValid] = useState(false);

    const resetHandler = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setIsLogedin('');
        setIsValid(false);
    }

    const userNameErrorMessage = useFormFieldValidatorCustomHook(username, 'username');
    const emailErrorMessage = useFormFieldValidatorCustomHook(email, 'email');
    const passwordErrorMessage = useFormFieldValidatorCustomHook(password, 'password');


    const inputHandler = (event) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value);
        }
        else if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
        else {
            setPassword(event.target.value);
        }
    }

    useEffect(() => {
        if (!isFirstRender.current) {
            if (userNameErrorMessage !== '' || passwordErrorMessage !== '' || emailErrorMessage !== '') {
                setIsValid(false);
            }
            else {
                setIsValid(true);
            }
        } else {
            isFirstRender.current = false;
        }
    }, [userNameErrorMessage, passwordErrorMessage, emailErrorMessage]);



    const submitFormHandler = (event) => {
        event.preventDefault();

        setIsLogedin(true);
    }

    // useEffect(() => {
    //     localStorage.setItem('username', JSON.stringify(username));
    // }, [username]);

    // useEffect(() => {
    //     const localStorageUsername = localStorage.getItem('username');
    //     if (localStorageUsername) {
    //         setUsername(JSON.parse.localStorageUsername);
    //     }
    // }, []);

    return (
        <div data-testid='center'>
            <form onSubmit={submitFormHandler}>
                <div data-testid='loginMessageContainer'>
                    {isLogedIn ?
                        'UserLogedIn'
                        : ''
                    }
                </div>
                <p >Username:</p>
                <input type="text"
                    name='username'
                    data-testid='username'
                    onBlur={inputHandler}
                    formNoValidate />
                <p data-testid='userNameErrorMessage'
                    style={{ fontSize: 10, color: 'red' }}>
                    {userNameErrorMessage}
                </p>
                <p>Email:</p>
                <input type="text"
                    name='email'
                    data-testid='email'
                    onBlur={inputHandler}
                    formNoValidate />
                <p data-testid='emailErrorMessage'
                    style={{ fontSize: 10, color: 'red' }}>
                    {emailErrorMessage}
                </p>
                <p>Password:</p>
                <input type="password"
                    name='password'
                    data-testid='password'
                    onBlur={inputHandler}
                    formNoValidate /><br />
                <p data-testid='passwordErrorMessage'
                    style={{ fontSize: 10, color: 'red' }}>
                    {passwordErrorMessage}
                </p>
                <input type="reset"
                    data-testid='reset' onClick={resetHandler} />
                <input type="submit"
                    data-testid='submit' disabled={!isFormValid} />
            </form>
        </div>
    );
}
export default LoginForm;