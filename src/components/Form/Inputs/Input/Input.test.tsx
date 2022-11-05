import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Input from '.';
import { inputData } from '../../../../test/testData';

describe('Input component', () => {
  test('render Input Component', () => {
    render(<Input {...inputData} />);
    expect(screen.getByDisplayValue(inputData.value)).toBeInTheDocument();
  });

  test('call the onChange callback handler', async () => {
    render(<Input {...inputData} />);

    await userEvent.type(screen.getByRole('searchbox'), 'glass');

    expect(inputData.onValueChange).toHaveBeenCalledTimes(5);
  });
});
