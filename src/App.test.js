import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom'
test('renders learn react link', () => {
    render( < App / > );
    expect(screen.getByText('Hello')).toBeInTheDocument;
});

it('renders welcome message', () => {
    render( < App / > );
    expect(screen.getByText('Hello')).toBeInTheDocument;
});

it('renders without crash', () => {
    const div = document.createElement('div');

    ReactDOM.render( < App / > , div);

})
describe('attributes', () => {

    it('gets the right color scheme for the environment', () => {
        const app = new App()
        expect(app.colorSchema).toEqual(undefined)
    })
})