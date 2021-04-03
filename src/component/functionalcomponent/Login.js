import React, { useState } from 'react';
import '../../login.css'
function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogedIn, setIsLogedin] = useState();
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const resetHandler = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setIsLogedin('');
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
    }

    const usernameInputHandler = (event) => {
        setUsername(username => username = event.target.value);
        if (event.target.name === 'username') {
            if (username.length <= 0 || username.length < 5) {
                setUsernameError(usernameError => usernameError = "username cannot be empty & atleast 5 character");
            }
            else {
                setUsernameError(usernameError => usernameError = '')
            }
        }
    }

    const emailInputHandler = (event) => {
        setEmail(email => email = event.target.value);
        if (event.target.name === 'email') {
            // setInputField({ username: 'kayastha' });
            if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setEmailError(emailError => emailError = "Email must have @domainname.com");
            }
            else {
                setEmailError(emailError => emailError = '');
            }
        }
    }
    const passwordInputHandler = (event) => {
        setPassword(password => password = event.target.value);
        if (password <= 0 || password.length < 5) {
            setPasswordError(passwordError => passwordError = "password must not be empty & atleast 6 chatacter");
        }
        else {
            setPasswordError(passwordError => passwordError = "");
        }
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        setIsLogedin(true);
    }

    return (
        <div data-testid='center'>
            <form onSubmit={submitFormHandler}>
                <div>
                    {isLogedIn ?
                        <h3 style={{ color: 'green' }}>UserLogedIn</h3>
                        :
                        <h3 style={{ color: 'red' }}>loginFailure !!</h3>
                    }
                </div>
                <p >Username:</p>
                <input type="text"
                    name='username'
                    data-testid='username'
                    onBlur={usernameInputHandler}
                    formNoValidate />
                <p style={{ fontSize: 10, color: 'red' }}>{usernameError}</p>
                <p>Email:</p>
                <input type="text"
                    name='email'
                    data-testid='email'
                    onBlur={emailInputHandler}
                    formNoValidate />
                <p style={{ fontSize: 10, color: 'red' }}>{emailError}</p>
                <p>Password:</p>
                <input type="text"
                    name='password'
                    data-testid='password'
                    onBlur={passwordInputHandler}
                    formNoValidate /><br />
                <p style={{ fontSize: 10, color: 'red' }}>{passwordError}</p>
                <input type="reset"
                    data-testid='reset' onClick={resetHandler} />
                <input type="submit"
                    data-testid='submit' />
            </form>
        </div>
    );
}
export default LoginForm;