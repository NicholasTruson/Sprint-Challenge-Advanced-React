import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import CardComp from './card';

test('CardData renders without crashing', () => {
  render(<CardComp />);
});