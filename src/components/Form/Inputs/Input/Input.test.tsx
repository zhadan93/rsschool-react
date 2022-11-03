import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Input from '.';
import { InputData } from '../../../../test/testData';

describe('Input component', () => {
  test('render Input Component', () => {
    render(<Input {...InputData} />);
    expect(screen.getByDisplayValue(InputData.value)).toBeInTheDocument();
  });

  test('call the onChange callback handler', async () => {
    render(<Input {...InputData} />);

    await userEvent.type(screen.getByRole('searchbox'), 'glass');

    expect(InputData.onValueChange).toHaveBeenCalledTimes(5);
  });
});
