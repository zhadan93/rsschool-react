import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Input from '../Input';
import { InputData } from '../../test/testData';
import { InputProps } from '../../types/types';

describe('Input component', () => {
  test('render Input Component', () => {
    render(<Input {...InputData} />);
    expect(screen.getByDisplayValue(InputData.value)).toBeInTheDocument();
  });

  test('call the onChange callback handler', async () => {
    render(<Input {...InputData} />);

    await userEvent.type(screen.getByRole('searchbox'), 'cтакан');

    expect(InputData.onValueChange).toHaveBeenCalledTimes(6);
  });

  test('call default type', async () => {
    const data: InputProps = InputData;
    delete data.type;

    render(<Input {...data} />);
    const input = screen.getByDisplayValue('test');
    expect(input.getAttribute('type')).toBe('text');
  });
});
