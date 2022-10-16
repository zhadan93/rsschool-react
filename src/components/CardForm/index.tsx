import React, { Component, createRef } from 'react';

import { InputWithRef } from 'components/Input';
import { SelectWithRef } from 'components/Select';
import { COUNTRIES } from '../../constants';
import './CardForm.scss';

type A = { className?: string };

class CardForm extends Component<A> {
  private firstName = createRef<HTMLInputElement>();
  private lastName = createRef<HTMLInputElement>();
  private birthday = createRef<HTMLInputElement>();
  private uploadPhoto = createRef<HTMLInputElement>();
  private agrees = createRef<HTMLInputElement>();
  private submit = createRef<HTMLInputElement>();
  private country = createRef<HTMLSelectElement>();
  private sex = createRef<HTMLInputElement>();

  private formData: (string | boolean | undefined)[] = [];

  constructor(props: A) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(): void {
    this.formData = [
      this.firstName.current?.value,
      this.lastName.current?.value,
      this.birthday.current?.value,
      this.uploadPhoto.current?.value,
      this.agrees.current?.checked,
      this.country.current?.value,
    ];

    const notIsEmpty = this.formData.some((item) => item);
    console.log(this.formData);
    const btn = this.submit.current;
    if (btn) {
      btn.disabled = !notIsEmpty;
      notIsEmpty
        ? btn.classList.remove('input-wrapper__submit-input--disabled')
        : btn.classList.add('input-wrapper__submit-input--disabled');
    }
  }

  render() {
    return (
      <>
        <form className="card-form">
          <InputWithRef
            id="cardFormFirstName"
            label="First Name"
            ref={this.firstName}
            onValueChange={this.handleChange}
          />
          <InputWithRef
            id="cardFormLastName"
            label="Last Name"
            ref={this.lastName}
            onValueChange={this.handleChange}
          />
          <InputWithRef
            id="cardFormDate"
            type="date"
            label="Birthday"
            ref={this.birthday}
            onValueChange={this.handleChange}
          />
          <SelectWithRef
            options={COUNTRIES}
            id="cardFormSelect"
            label="Country"
            ref={this.country}
            defaultValue="Choose country"
            onValueChange={this.handleChange}
          />
          <InputWithRef
            id="cardFormSex"
            label="Sex"
            type="checkbox"
            ref={this.sex}
            onValueChange={this.handleChange}
            optionLabels={['male', 'female']}
            isSwitch={true}
          />
          <InputWithRef
            id="cardFormUploadPhoto"
            type="file"
            label="Upload Photo"
            accept=".jpeg, .jpg, .png. .svg"
            ref={this.uploadPhoto}
            onValueChange={this.handleChange}
          />
          <InputWithRef
            id="cardForm"
            label="I consent to my personal data"
            type="checkbox"
            ref={this.agrees}
            onValueChange={this.handleChange}
          />
          <InputWithRef type="submit" value="Create Card" ref={this.submit} disabled />
        </form>
      </>
    );
  }
}

export default CardForm;
