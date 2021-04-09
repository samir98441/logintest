// import React from 'react';
// import { fireEvent, render } from '@testing-library/react'
// import LoginForm from '../Login';


// // jest.mock('../Login');

// describe('testLogin', () => {
//     it('error message for empty username', () => {
//         // console.log(localStorage);
//         // localStorage.getItem = function () {
//         //     throw (new Error());
//         // }
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('username'), { target: { value: 'test', name: 'username' } });
//         fireEvent.change(getByTestId('username'), { target: { value: '', name: 'username' } });
//         fireEvent.blur(getByTestId('username'));
//         expect(getByTestId('name_error').innerHTML).not.toBe('');
//     });

//     it('no error for valid username', () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('username'), { target: { value: 'sameer' } });
//         fireEvent.blur(getByTestId('username'));
//         expect(getByTestId('name_error').innerHTML).toBe('');

//     });

//     it('error message for email not having @domainname.com', () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('email'), { target: { value: 'sameer', name: 'email' } });
//         fireEvent.blur(getByTestId('email'));
//         expect(getByTestId('email_error')).not.toBe("");
//     });

//     it('no error message for email containing @domainname.com', () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('email'), { target: { value: 'sameer@gmail.com', name: 'email' } });
//         fireEvent.blur(getByTestId('email'));
//         expect(getByTestId('email_error').innerHTML).toHaveLength(0);
//     });

//     it('error message for password length less than 5', () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('password'), { target: { value: '1234' } });
//         fireEvent.blur(getByTestId('password'));
//         expect(getByTestId('password_error')).not.toBe('');
//     });

//     it('no error message for password length greater than 5', () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('password'), { target: { value: '1234dfdf' } });
//         fireEvent.blur(getByTestId('password'));
//         expect(getByTestId('password_error').innerHTML).toHaveLength(0);
//     });


//     it('LoginError message is shown for invalid form', () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('email'), { target: { value: 'djdhf' } });
//         fireEvent.change(getByTestId('password'), { target: { value: 'ss' } });
//         fireEvent.blur(getByTestId('username'));
//         fireEvent.blur(getByTestId('email'));
//         fireEvent.blur(getByTestId('password'));
//         fireEvent.submit(getByTestId('submit'));
//         expect(getByTestId('logedin_message').innerHTML).toBe('LogginError');
//     });

//     it('Display LogedIn message if form is valid', () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('username'), { target: { value: 'sameer', name: 'username' } });
//         fireEvent.blur(getByTestId('username'));
//         fireEvent.change(getByTestId('email'), { target: { value: 'sameer@gmail.com', name: 'email' } });
//         fireEvent.blur(getByTestId('email'));
//         fireEvent.change(getByTestId('password'), { target: { value: '12342320', name: 'password' } });
//         fireEvent.blur(getByTestId('password'));
//         fireEvent.submit(getByTestId('submit'));
//         expect(getByTestId('logedin_message').innerHTML).toBe('LogedIn');
//     });

//     it("resetform", () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.click(getByTestId('reset'));
//         expect(getByTestId('username').innerHTML).toBe('');
//         expect(getByTestId('password').innerHTML).toBe('');
//         expect(getByTestId('email').innerHTML).toBe('');
//     })

//     it('submit button line 83', () => {
//         const { getByTestId } = render(<LoginForm />);
//         fireEvent.change(getByTestId('username'), { target: { value: '' } });
//         fireEvent.change(getByTestId('email'), { target: { value: 'sameer' } });
//         fireEvent.change(getByTestId('password'), { target: { value: 'sa' } });
//         fireEvent.blur(getByTestId('username'));
//         fireEvent.blur(getByTestId('email'));
//         fireEvent.blur(getByTestId('password'));
//         expect(getByTestId('submit')).toBeDisabled();
//     });

//     // it('mock', () => {

//     //     const user = new LoginForm();
//     //     console.log(user.try());

//     // });
// })
