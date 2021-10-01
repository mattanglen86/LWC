import { createElement } from 'lwc';
import UnitTest from 'c/unitTest';

describe('c-unit-test', () => {
    //Clears DOM before first and after each test - like refreshing browser
    afterEach(() => {
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
    //adds an element to LWC, testing that the component will display
    it('displays unit status with default number', () => {
        const element = createElement('c-unit-test', {
            is : UnitTest
        });
        expect(element.unitNumber).toBe(5);
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Unit 5 alive!');
    });
    //changes the display, confirming component can be updated
    //changes in status require Promise (async) so test can wait
    it('displays unit status with updated unitNumber', () => {
        const element = createElement('c-unit-test', {
            is : UnitTest
        });
        document.body.appendChild(element);
        element.unitNumber = 6
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).not.toBe('Unit 6 is alive!');
        return Promise.resolve().then(() => {
            expect(div.textContent).toBe('Unit 6 alive!');
        });
    });
    //tests user input, also requires Promise (async) due to status change
    it('displays unit status with input change event', () => {
        const element = createElement('c-unit-test', {
            is : UnitTest
        });
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector('div');
        const inputElement = element.shadowRoot.querySelector('lightning-input');
        inputElement.value = 7;
        inputElement.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(() => {
            expect(div.textContent).toBe('Unit 7 alive!');
        });
    });
});