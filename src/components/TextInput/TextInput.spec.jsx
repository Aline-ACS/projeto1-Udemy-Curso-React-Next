import userEvent from '@testing-library/user-event';
import { TextInput } from './index';
const { render, screen } = require('@testing-library/react');

describe('<TextInput/>', () => {
    it('should have a value on searchValue', () => {
        const fn = jest.fn();

        render(<TextInput handleChange={fn} searchValue={'testando'}/>);

        const input = screen.getByPlaceholderText(/type your search/i);
        
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('testando');
    });
    
    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();

        render(<TextInput handleChange={fn} searchValue="um valor qualquer"/>);

        const valueInput = 'o valor';
        const input = screen.getByPlaceholderText(/type your search/i);


        userEvent.type(input, valueInput);
        
        expect(input.value).toBe('um valor qualquer');
        expect(fn).toHaveBeenCalledTimes(valueInput.length);
    });

    it('sholud match snapshot', () => {
        const fn = jest.fn();

        const {container} = render(<TextInput handleChange={fn} searchValue={'testando'}/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});