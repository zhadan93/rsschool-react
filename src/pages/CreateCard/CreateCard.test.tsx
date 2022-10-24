import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CreateCard from '../CreateCard';

describe('CreateCard component', () => {
  test('render CreateCard Component', () => {
    render(<CreateCard />);
    expect(screen.getByTestId('create-card')).toBeInTheDocument();
  });
});
