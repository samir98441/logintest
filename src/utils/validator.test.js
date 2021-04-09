
import { isValidUserName, isValidPassword, isValidEmail } from './validator';

describe('validator testing', () => {

    it('validate username type', () => {
        expect(isValidUserName('')).toBe(false);
        expect(isValidUserName('123')).toBe(false);
        expect(isValidUserName('asdasdsd')).toBe(true);
        expect(isValidUserName()).toBe(false);
    });

    it('validate email type', () => {
        expect(isValidEmail('')).toBe(false);
        expect(isValidEmail('123')).toBe(false);
        expect(isValidEmail('t@')).toBe(false);
        expect(isValidEmail('t@.')).toBe(false);
        expect(isValidEmail('t@.c')).toBe(false);
        expect(isValidEmail('t@.c.cs')).toBe(false);
        expect(isValidEmail()).toBe(false);
        expect(isValidEmail('t@d.c')).toBe(true);
    });

    it('validate password type', () => {
        expect(isValidPassword('')).toBe(false);
        expect(isValidPassword('123')).toBe(false);
        expect(isValidPassword('asdasdsd')).toBe(true);
        expect(isValidPassword()).toBe(false);
    });
});
