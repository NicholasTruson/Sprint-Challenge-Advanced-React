import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import CardData from './cardData';

test('CardData renders without crashing', () => {
  render(<CardData />);
});