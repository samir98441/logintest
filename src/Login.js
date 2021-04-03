import React from 'react';
import './login.css';
/* 
    TODO
    Disable submit button if reqiured field are not filled and valid -DONE
    Validation of require field both from html attribute and javasript -DONE
    Show error message if any require field is not filled -DONE
    Reset button to reset the form -DONE
    if logged in show user has looged in message and button to logout, show username -DONE
    Save the login detail in local storage -DONE
    Make sure to validate login status before application run 
*/

export default class LoginForm extends React.Component {
    userdata;
    constructor(props) {
        let username, isLoggedIn = false;
        try {
            username = localStorage.getItem('user');
            if (username) {
                isLoggedIn = 'LogedIn';
            }
        } catch (err) {
            username = '';
        }
        super(props);
        this.state = {
            username,
            email: "",
            password: "",
            isLoggedIn,
            usernameError: "",
            emailError: "",
            passwordError: "",
            isError: true,
            isErrorU: true,
            isErrorP: true,
            isErrorE: true,
            loggedinUserName: "",
            logoutButton: 'none',
            hideSubmitButton: "visible",
        }
        // this.setState({ username: JSON.parse(localStorage.getItem('user')) })
    }

    validate(event) {
        if (event.target.name === 'username') {
            if (this.state.username.length <= 0) {
                this.setState({ isErrorU: true }, () => this.submitButtonValidate());
                this.setState({ usernameError: "username cannot be empty" });
            }
            else {
                this.setState({ usernameError: '' })
                this.setState({ isErrorU: false }, () => this.submitButtonValidate());
            }
        }
        else if (event.target.name === 'email') {
            if (!this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                this.setState({ isErrorE: true }, () => this.submitButtonValidate());
                this.setState({ emailError: "Email must have @domainname.com" });
            }
            else {
                this.setState({ emailError: "" });
                this.setState({ isErrorE: false }, () => this.submitButtonValidate());
            }
        }
        else {
            if (this.state.password <= 0 || this.state.password.length < 5) {
                this.setState({ isErrorP: true }, () => this.submitButtonValidate());
                this.setState({ passwordError: "password must not be empty and atleast 6 chatacter" })
            }
            else {
                this.setState({ passwordError: "" });
                this.setState({ isErrorP: false }, () => this.submitButtonValidate());
            }
        }
    }

    submitButtonValidate() {
        if (this.state.isErrorU === false && this.state.isErrorE === false && this.state.isErrorP === false) {
            this.setState({ isError: false });
        }
        else if (this.state.isErrorU === true || this.state.isErrorE === true || this.state.isErrorP === true) {
            this.setState({ isError: true });
        }
    }
    formSubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.isError) {
            this.setState({ isLoggedIn: 'LogginError' })
        }
        else {
            this.setState({ isLoggedIn: 'LogedIn' });
            this.setState({ loggedinUserName: this.state.username });
            this.setState({ logoutButton: '' });
            this.setState({ hideSubmitButton: 'none' });
        }
    }

    textChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value }, (event) => {
            this.validate(event);
        });
    }

    reset = (event) => {
        this.setState({
            username: "",
            email: "",
            password: "",
            isLoggedIn: " ",
            usernameError: "",
            emailError: "",
            passwordError: "",
            isError: true,
            isErrorU: true,
            isErrorP: true,
            isErrorE: true,
            loggedinUserName: "",
            logoutButton: 'none',
            hideSubmitButton: "",
        })
    }

    // componentDidMount() {
    // this.setState({ username: JSON.parse(localStorage.getItem('user')) })

    // this.userdata = JSON.parse(localStorage.getItem('user'));
    // if (localStorage.getItem('user')) {
    //     this.setState({ username: this.userdata.username })
    // }
    // }

    componentDidUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(this.state.username));
    }

    render() {
        return (
            <div data-testid='center'>
                <form onSubmit={this.formSubmitHandler} data-testid="submit-form">
                    <p data-testid="logedin_message">{this.state.isLoggedIn}</p><p style={{ color: 'red', fontSize: 'large' }}>{this.state.loggedinUserName}</p>
                    <p>UserName:</p>
                    <input type="text"
                        data-testid="username"
                        placeholder="Enter Username"
                        name="username"
                        onBlur={this.textChangeHandler} formNoValidate />
                    <p data-testid="name_error" style={{ fontSize: 10, color: 'red' }}>{this.state.usernameError}
                    </p>

                    <p>Email:</p>
                    <input type="text"
                        placeholder="@email.com"
                        name="email"
                        data-testid="email"
                        onBlur={this.textChangeHandler} formNoValidate /><br />
                    <p data-testid="email_error" style={{ fontSize: 10, color: 'red' }}>{this.state.emailError}</p>

                    <p>Password:</p>
                    <input type="text"
                        placeholder="Enter Password"
                        name="password"
                        data-testid="password"
                        onBlur={this.textChangeHandler} formNoValidate /><br />
                    <p data-testid="password_error" style={{ fontSize: 10, color: 'red' }}>{this.state.passwordError}</p>

                    <input type="reset" data-testid="reset" name="reset" id="reset" onClick={this.reset} value="Reset" />
                    <input type="submit" style={{ display: `${this.state.hideSubmitButton}` }} data-testid="submit" disabled={this.state.isError} />
                    <input type='button' value="Logout" style={{ display: `${this.state.logoutButton}` }} />
                </form>
            </div>);

    }

}