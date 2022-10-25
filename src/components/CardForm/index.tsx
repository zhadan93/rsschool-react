import React, { Component, createRef, ChangeEvent } from 'react';

import { InputWithRef } from 'components/Input';
import { SelectWithRef } from 'components/Select';
import { NotificationWithRef } from 'components/Notification';

import { COUNTRIES } from '../../constants';
import { CardFormDetails } from 'types/types';
import './CardForm.scss';
import { isValidName, isValidUploadImg } from 'helpers/validate';

const disabledSubmitBtn = 'input-wrapper__input--disabled';
const sexValues = ['male', 'female'];
const notValidClass = 'not-valid';

type CardFormProps = { onValueSubmit: (value: CardFormDetails) => void };

const defaultFormElementValues: Record<string, string | boolean> = {
  firstName: '',
  lastName: '',
  birthday: '',
  sex: false,
  country: 'Choose country',
  avatar: '',
  agrees: false,
};

class CardForm extends Component<CardFormProps> {
  private firstName = createRef<HTMLInputElement>();
  private lastName = createRef<HTMLInputElement>();
  private birthday = createRef<HTMLInputElement>();
  private sex = createRef<HTMLInputElement>();
  private country = createRef<HTMLSelectElement>();
  private avatar = createRef<HTMLInputElement>();
  private agrees = createRef<HTMLInputElement>();

  private submit = createRef<HTMLInputElement>();
  private formElements: Record<string, HTMLInputElement | HTMLSelectElement> = {};
  private errors: Record<string, boolean> = {};
  private notification = createRef<HTMLDivElement>();

  constructor(props: CardFormProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleSubmitBtnState(isDisabled: boolean) {
    const btn = this.submit.current;
    if (btn) {
      btn.disabled = isDisabled;
      isDisabled ? btn.classList.add(disabledSubmitBtn) : btn.classList.remove(disabledSubmitBtn);
    }
  }

  isValidForm() {
    return !Object.values(this.errors).some((item) => item);
  }

  async handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { id } = e.target;

    const notValidEl = this.errors[id];
    if (notValidEl) {
      this.errors[id] = false;
      this.formElements[id].classList.remove(notValidClass);
    }

    const isValidForm = this.isValidForm();
    isValidForm && this.toggleSubmitBtnState(false);
  }

  setDefaultValue(key: string, el: HTMLInputElement | HTMLSelectElement) {
    const defaultValue = defaultFormElementValues[key];

    if (typeof defaultValue === 'string') {
      el.value = defaultValue;
    } else if (typeof defaultValue === 'boolean' && el instanceof HTMLInputElement) {
      el.checked = defaultValue;
    }
  }

  defineNotValidField(key: string, el: HTMLInputElement | HTMLSelectElement) {
    el.classList.add(notValidClass);
    this.errors[key] = true;

    this.setDefaultValue(key, el);
  }

  resetForm() {
    Object.entries(this.formElements).forEach(([key, el]) => {
      this.setDefaultValue(key, el);
    });
  }

  async handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const firstNameEl = this.firstName.current;
    const lastNameEl = this.lastName.current;
    const birthdayEl = this.birthday.current;
    const sexEl = this.sex.current;
    const countryEl = this.country.current;
    const avatarEl = this.avatar.current;
    const agreesEl = this.agrees.current;

    if (firstNameEl && lastNameEl && birthdayEl && sexEl && countryEl && avatarEl && agreesEl) {
      this.formElements = {
        firstName: firstNameEl,
        lastName: lastNameEl,
        birthday: birthdayEl,
        sex: sexEl,
        country: countryEl,
        avatar: avatarEl,
        agrees: agreesEl,
      };

      const firstName = firstNameEl.value;
      const isValidFirstName = isValidName(firstName);

      !isValidFirstName && this.defineNotValidField('firstName', firstNameEl);

      const lastName = lastNameEl.value;
      const isValidLastName = isValidName(lastName);
      !isValidLastName && this.defineNotValidField('lastName', lastNameEl);

      const birthday = birthdayEl.value;
      const isValidBirthday = !!birthday;
      !isValidBirthday && this.defineNotValidField('birthday', birthdayEl);

      const country = countryEl.value;
      const isValidCountry = country !== defaultFormElementValues.country;
      !isValidCountry && this.defineNotValidField('country', countryEl);

      const avatar = avatarEl.files?.[0];
      const isValidAvatar = isValidUploadImg(avatar);
      !isValidAvatar && this.defineNotValidField('avatar', avatarEl);

      const isValidAgrees = agreesEl.checked;
      !isValidAgrees && this.defineNotValidField('agrees', agreesEl);

      const sex = sexEl.checked;
      const [male, female] = sexValues;

      this.toggleSubmitBtnState(true);

      if (this.isValidForm() && avatar) {
        let url = '';
        url = URL.createObjectURL(avatar);

        this.props.onValueSubmit({
          firstName,
          lastName,
          birthday,
          country,
          avatar: url,
          sex: sex ? male : female,
        });

        this.resetForm();

        const notificationEl = this.notification.current;
        notificationEl?.classList.add('valid');
        await notificationEl?.getAnimations()?.[0].finished;
        notificationEl?.classList.remove('valid');
      }
    }
  }

  render() {
    const { country } = defaultFormElementValues;

    if (typeof country === 'string') {
      return (
        <>
          <form
            data-testid="card-form"
            className="card-form main__card-form"
            onSubmit={this.handleSubmit}
          >
            <InputWithRef
              data-testid="first-name"
              className="card-form__input"
              id="firstName"
              label="First Name"
              ref={this.firstName}
              onValueChange={this.handleChange}
              error={'Only Alphabets and more then one characters'}
            />
            <InputWithRef
              data-testid="last-name"
              className="card-form__input"
              id="lastName"
              label="Last Name"
              ref={this.lastName}
              onValueChange={this.handleChange}
              error={'Only Alphabets and more then one characters'}
            />
            <InputWithRef
              data-testid="birthday"
              className="card-form__input"
              id="birthday"
              type="date"
              label="Birthday"
              ref={this.birthday}
              onValueChange={this.handleChange}
              error={'You need to choose date'}
            />
            <InputWithRef
              data-testid="sex"
              className="card-form__switcher"
              id="sex"
              label="Sex"
              type="checkbox"
              ref={this.sex}
              onValueChange={this.handleChange}
              optionLabels={sexValues}
              isSwitch={true}
            />
            <SelectWithRef
              className="card-form__select"
              options={COUNTRIES}
              id="country"
              label="Country"
              ref={this.country}
              defaultValue={country}
              onValueChange={this.handleChange}
              error={'You need to choose country'}
            />
            <InputWithRef
              data-testid="avatar"
              className="card-form__file"
              id="avatar"
              type="file"
              label="Upload Photo"
              ref={this.avatar}
              onValueChange={this.handleChange}
              error={'You need to upload image'}
            />
            <InputWithRef
              data-testid="agrees"
              id="agrees"
              label="I consent to my personal data"
              type="checkbox"
              ref={this.agrees}
              onValueChange={this.handleChange}
              error={'You need to agree'}
            />
            <InputWithRef
              data-testid="submit"
              className="card-form__submit"
              type="submit"
              value="Create Card"
              ref={this.submit}
              disabled
            />
          </form>
          <NotificationWithRef
            ref={this.notification}
            type="success"
            message={'Data saved successfully!'}
          />
        </>
      );
    }
  }
}

export default CardForm;
