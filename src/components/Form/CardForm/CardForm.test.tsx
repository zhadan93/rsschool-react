import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import urlMock from 'test/urlMock';
import CardForm from '.';
import { CardFormDetails } from 'types/types';

const addCardDataMock = () => {
  const cardsData: CardFormDetails[] = [];
  return jest.fn((value: CardFormDetails) => cardsData.push(value));
};

describe('CardForm component', () => {
  const notValidClass = 'not-valid';
  const disabledSubmitBtn = 'submit--disabled';
  const firstNameTestId = 'first-name';
  const lastNameTestId = 'last-name';
  const birthdayTestId = 'birthday';
  const sexTestId = 'sex';
  const countryTestId = 'select';
  const avatarTestId = 'avatar';
  const agreesTestId = 'agrees';

  test('render CardForm Component', () => {
    const addCardData = addCardDataMock();
    render(<CardForm onValueSubmit={addCardData} />);
    expect(screen.getByTestId('card-form')).toBeInTheDocument();
  });

  test('check validity of firstName field when entering non-Alphabets and resetting value', async () => {
    const addCardData = addCardDataMock();
    const value = '1p0';

    render(<CardForm onValueSubmit={addCardData} />);
    const firstNameField = await setUpTextInput(firstNameTestId, value);

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(firstNameField).toHaveValue(value);
    expect(firstNameField.classList.contains(notValidClass)).toBeTruthy();
  });

  test('check invalid state of lastName field when entering less than 2 characters and resetting value', async () => {
    const addCardData = addCardDataMock();
    const value = 'p';

    render(<CardForm onValueSubmit={addCardData} />);
    const lastNameField = await setUpTextInput(lastNameTestId, value);

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(lastNameField).toHaveValue(value);
    expect(lastNameField.classList.contains(notValidClass)).toBeTruthy();
  });

  test('check class reset for invalid lastName field when value changes', async () => {
    const addCardData = addCardDataMock();
    const changeValue = 'I';
    const value = 'p';

    render(<CardForm onValueSubmit={addCardData} />);
    const lastNameField = await setUpTextInput(lastNameTestId, value);

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(lastNameField).toHaveValue(value);
    expect(lastNameField.classList.contains(notValidClass)).toBeTruthy();

    await act(() => userEvent.type(lastNameField, changeValue));
    expect(lastNameField).toHaveValue(`${value}${changeValue}`);
    expect(lastNameField.classList.contains(notValidClass)).toBeFalsy();
  });

  test('check valid state of lastName field', async () => {
    const addCardData = addCardDataMock();
    const validValue = 'Red';

    render(<CardForm onValueSubmit={addCardData} />);
    const lastNameField = await setUpTextInput(lastNameTestId, validValue);

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(lastNameField).toHaveValue(validValue);
    expect(lastNameField.classList.contains(notValidClass)).toBeFalsy();
  });

  test('check invalid state of birthday field', async () => {
    const addCardData = addCardDataMock();
    render(<CardForm onValueSubmit={addCardData} />);
    await setUpTextInput(firstNameTestId, 'p');

    const birthdayField = screen.getByTestId('birthday');
    expect(birthdayField).toBeInTheDocument();

    expect(birthdayField).toHaveValue('');

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(birthdayField).toHaveValue('');
    expect(birthdayField.classList.contains(notValidClass)).toBeTruthy();
  });

  test('check valid state of birthday field', async () => {
    const addCardData = addCardDataMock();
    const validValue = '2022-10-09';

    render(<CardForm onValueSubmit={addCardData} />);
    const birthdayField = await setUpTextInput(birthdayTestId, validValue);

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(birthdayField).toHaveValue(validValue);
    expect(birthdayField.classList.contains(notValidClass)).toBeFalsy();
  });

  test('check invalid state of country field', async () => {
    const addCardData = addCardDataMock();
    render(<CardForm onValueSubmit={addCardData} />);
    await setUpTextInput(firstNameTestId, 'Eric');

    const countryField = screen.getByTestId('select');
    expect(countryField).toBeInTheDocument();

    expect(countryField).toHaveValue('Choose country');

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(countryField).toHaveValue('Choose country');
    expect(countryField.classList.contains(notValidClass)).toBeTruthy();
  });

  test('check valid country field', async () => {
    const addCardData = addCardDataMock();
    const value = 'Armenia';

    render(<CardForm onValueSubmit={addCardData} />);
    const countryField = await setUpSelect(countryTestId, value, 'Choose country');

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(countryField).toHaveValue('Armenia');
    expect(countryField.classList.contains(notValidClass)).toBeFalsy();
  });

  test('check invalid state of avatar field when uploading non-image', async () => {
    const addCardData = addCardDataMock();
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });

    render(<CardForm onValueSubmit={addCardData} />);
    const avatarField = await setUpFileInput(avatarTestId, file);

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(avatarField?.files?.[0].name).toStrictEqual('hello.txt');
  });

  test('check valid state of avatar field', async () => {
    const addCardData = addCardDataMock();
    const file = new File(['hello'], 'hello.jpg', { type: 'image/jpg' });

    render(<CardForm onValueSubmit={addCardData} />);
    const avatarField = await setUpFileInput(avatarTestId, file);

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(avatarField?.files?.[0].name).toStrictEqual('hello.jpg');
  });

  test('check invalid state of agrees field', async () => {
    const addCardData = addCardDataMock();
    render(<CardForm onValueSubmit={addCardData} />);
    await setUpTextInput(firstNameTestId, 'Betty');

    const agreesField = screen.getByTestId('agrees');
    expect(agreesField).toBeInTheDocument();

    expect(agreesField).not.toBeChecked();

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(agreesField.classList.contains(notValidClass)).toBeTruthy();
  });

  test('check valid state of agrees field', async () => {
    const addCardData = addCardDataMock();
    render(<CardForm onValueSubmit={addCardData} />);

    const agreesField = await setUpCheckboxInput(agreesTestId);

    await act(() => userEvent.click(screen.getByTestId('submit')));
    expect(agreesField).toBeChecked();
    expect(agreesField.classList.contains(notValidClass)).toBeFalsy();
  });

  test('check data submission when all form fields are valid', async () => {
    const addCardData = addCardDataMock();
    const file = new File(['hello'], 'hello.jpg', { type: 'image/jpg' });

    urlMock();

    render(<CardForm onValueSubmit={addCardData} />);
    await setUpTextInput(firstNameTestId, 'Betty');
    await setUpTextInput(lastNameTestId, 'Young');
    await setUpTextInput(birthdayTestId, '2000-10-09');
    await setUpSelect(countryTestId, 'Armenia', 'Choose country');
    await setUpFileInput(avatarTestId, file);
    await setUpCheckboxInput(agreesTestId);

    await act(() => userEvent.click(screen.getByTestId('submit')));
  });

  test('check data submission when not all form fields are valid', async () => {
    const addCardData = addCardDataMock();

    render(<CardForm onValueSubmit={addCardData} />);

    await setUpTextInput(firstNameTestId, 'Betty');
    await setUpTextInput(birthdayTestId, '2000-10-09');
    await setUpSelect(countryTestId, 'Armenia', 'Choose country');
    await setUpCheckboxInput(agreesTestId);

    expect(addCardData).not.toBeCalled();
  });

  test('check that the button is disabled during the first render', () => {
    const addCardData = addCardDataMock();
    render(<CardForm onValueSubmit={addCardData} />);

    const submitBtn = screen.getByTestId('submit');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
    expect(submitBtn.classList.contains(disabledSubmitBtn)).toBeTruthy();
  });

  test('check that the button becomes active on the first input', async () => {
    const addCardData = addCardDataMock();
    render(<CardForm onValueSubmit={addCardData} />);

    const submitBtn = screen.getByTestId('submit');
    expect(submitBtn).toBeInTheDocument();

    await setUpCheckboxInput(sexTestId);
    expect(submitBtn).not.toBeDisabled();
    expect(submitBtn.classList.contains(disabledSubmitBtn)).toBeFalsy();
  });

  const setUpTextInput = async (testId: string, value: string, defaultValue?: string) => {
    const textField = screen.getByTestId(testId);
    expect(textField).toBeInTheDocument();
    defaultValue && expect(textField).toHaveValue(defaultValue);

    userEvent.type(textField, value);
    expect(textField).toHaveValue(value);

    return textField;
  };

  const setUpFileInput = async (testId: string, file: File) => {
    const fileUploadField = screen.getByTestId(testId);
    expect(fileUploadField).toBeInTheDocument();

    if (fileUploadField instanceof HTMLInputElement) {
      await userEvent.upload(fileUploadField, file);
      expect(fileUploadField.files?.[0]).toStrictEqual(file);

      return fileUploadField;
    }
  };

  const setUpSelect = async (testId: string, value: string, defaultValue?: string) => {
    const countryField = screen.getByTestId(testId);
    expect(countryField).toBeInTheDocument();
    defaultValue && expect(countryField).toHaveValue(defaultValue);

    await userEvent.selectOptions(countryField, value);
    expect(countryField).toHaveValue(value);

    return countryField;
  };

  const setUpCheckboxInput = async (testId: string) => {
    const checkboxField = screen.getByTestId(testId);
    expect(checkboxField).toBeInTheDocument();

    await userEvent.click(checkboxField);
    expect(checkboxField).toBeChecked();

    return checkboxField;
  };
});
