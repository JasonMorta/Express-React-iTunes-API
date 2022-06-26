import React from 'react';
import App from '../src/App.jsx'

import renderer from 'react-test-renderer';


it('renders correctly', () => {
   const tree = renderer
   .create(<App/>)
   expect(tree).toMatchSnapshot();
   });