import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from '.';

describe('Modal component', () => {
  test('render Modal component', () => {
    const { getByText } = render(
      <Modal>
        <div>React Portal</div>
      </Modal>
    );

    expect(getByText(/react portal/i)).toBeTruthy();
    expect(screen.getByTestId('modal').classList.contains('open-modal')).toBeTruthy();
  });
});
