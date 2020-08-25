import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('<Card />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Card />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<Card />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});