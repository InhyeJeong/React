import React from 'react';
import ReactDOM from 'react-dom';
import SupportLayout from '../src/Components/UILayout/SupportLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SupportLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
