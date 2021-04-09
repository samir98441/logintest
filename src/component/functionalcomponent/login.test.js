import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './Login';

describe('LoginTest', () => {

    it('reset form values', () => {
        const { getByTestId } = render(<LoginForm />);
        fireEvent.click(getByTestId('reset'));
        expect(getByTestId('username').innerHTML).toBe('');
        expect(getByTestId('password').innerHTML).toBe('');
        expect(getByTestId('email').innerHTML).toBe('');
    });

    it('Display LogedIn message if form is valid', () => {
        const { getByTestId } = render(<LoginForm />);
        fireEvent.change(getByTestId('username'), { target: { value: 'sameer', name: 'username' } });
        fireEvent.blur(getByTestId('username'));
        fireEvent.change(getByTestId('email'), { target: { value: 'sameer@gmail.com', name: 'email' } });
        fireEvent.blur(getByTestId('email'));
        fireEvent.change(getByTestId('password'), { target: { value: '12342320', name: 'password' } });
        fireEvent.blur(getByTestId('password'));
        fireEvent.submit(getByTestId('submit'));
        expect(getByTestId('loginMessageContainer').innerHTML).toBe('UserLogedIn');
    });

});
