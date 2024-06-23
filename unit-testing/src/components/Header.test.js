import Header from "./Header";
import ReactDOM from 'react-dom';
import { screen, render, cleanup } from "@testing-library/react";

describe('Header Component', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        cleanup();
    });

    test('Has heading without testing library', () => {
        const rootElement = document.createElement('div');
        rootElement.id = 'root';

        document.body.appendChild(rootElement);

        ReactDOM.render(<Header />, rootElement,)

        const actualElement = rootElement.querySelector('h1.heading');
        expect(actualElement.textContent).toBe('Unit Testing');
    });

    test('Has heading using testing library', () => {
        render(<Header />);

        const element = screen.getByText('Unit Testing');

        expect(element).toBeInTheDocument();
    });
});