import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import Input from 'components/Form/Inputs/Input';
import Select from 'components/Form/Select';
import Notification from '../../Notification';
import Switcher from '../Inputs/Switcher';
import SubmitBtn from 'components/Form/Inputs/SubmitBtn';
import UploadFile from '../Inputs/UploadFile';
import Date from 'components/Form/Inputs/Date';
import Checkbox from 'components/Form/Inputs/Checkbox';
import Error from 'components/Error';

import { CardFormDetails } from 'types/types';

import { COUNTRIES } from '../../../constants';
import {
  firstNameOptions,
  lastNameOptions,
  dateOptions,
  countryOptions,
  agreesOptions,
  avatarOptions,
} from 'helpers/validate';

import './CardForm.scss';

const sexValues = ['male', 'female'];
const notValidClass = 'not-valid';

type CardFormProps = { onValueSubmit: (value: CardFormDetails) => void };
type FormDetails = {
  firstName: string;
  lastName: string;
  birthday: string;
  sex: boolean;
  country: string;
  avatar: FileList;
  agrees: boolean;
};

const CardForm: React.FC<CardFormProps> = ({ onValueSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isDirty },
  } = useForm<FormDetails>({
    defaultValues: {
      firstName: '',
      lastName: '',
      birthday: '',
      sex: false,
      country: 'Choose country',
      agrees: false,
    },
  });

  const firstName = { ...register('firstName', firstNameOptions) };
  const lastName = { ...register('lastName', lastNameOptions) };
  const birthday = { ...register('birthday', dateOptions) };
  const sex = { ...register('sex') };
  const country = { ...register('country', countryOptions) };
  const avatar = { ...register('avatar', avatarOptions) };
  const agrees = { ...register('agrees', agreesOptions) };

  const [isSuccessful, setIsSuccessful] = useState(false);

  const onSubmit = handleSubmit((data) => {
    const [male, female] = sexValues;
    const { firstName, lastName, birthday, country, avatar, sex } = data;

    onValueSubmit({
      firstName,
      lastName,
      birthday,
      country,
      avatar: URL.createObjectURL(avatar[0]),
      sex: sex ? male : female,
    });
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setIsSuccessful(true);
      const timerId = setTimeout(() => {
        setIsSuccessful(false);
        clearTimeout(timerId);
      }, 4000);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <form data-testid="card-form" className="card-form main__card-form" onSubmit={onSubmit}>
        <Input
          data-testid="first-name"
          className={classNames('card-form__input', { [notValidClass]: errors.firstName?.message })}
          id="firstName"
          register={firstName}
          error={<Error className="card-form__error">{errors.firstName?.message}</Error>}
        >
          First Name
        </Input>
        <Input
          data-testid="last-name"
          className={classNames('card-form__input', { [notValidClass]: errors.lastName?.message })}
          id="lastName"
          register={lastName}
          error={<Error className="card-form__error">{errors.lastName?.message}</Error>}
        >
          Last Name
        </Input>
        <Date
          data-testid="birthday"
          className={classNames('card-form__input', { [notValidClass]: errors.birthday?.message })}
          id="birthday"
          register={birthday}
          error={<Error className="card-form__error">{errors.birthday?.message}</Error>}
        >
          Birthday
        </Date>
        <Switcher
          data-testid="sex"
          className="card-form__switcher"
          id="sex"
          register={sex}
          optionLabels={sexValues}
        >
          Sex
        </Switcher>
        <Select
          className={classNames('card-form__select', { [notValidClass]: errors.country?.message })}
          options={COUNTRIES}
          id="country"
          register={country}
          error={<Error className="card-form__error">{errors.country?.message}</Error>}
        >
          Country
        </Select>
        <UploadFile
          data-testid="avatar"
          className={classNames('card-form__file', { [notValidClass]: errors.avatar?.message })}
          id="avatar"
          register={avatar}
          error={<Error className="card-form__error">{errors.avatar?.message}</Error>}
        >
          Upload Photo
        </UploadFile>
        <Checkbox
          data-testid="agrees"
          className={classNames({ [notValidClass]: errors.agrees?.message })}
          id="agrees"
          register={agrees}
          error={<Error className="card-form__error">{errors.agrees?.message}</Error>}
        >
          I consent to my personal data
        </Checkbox>
        <SubmitBtn
          data-testid="submit"
          className="card-form__submit"
          value="Create Card"
          disabled={!isDirty || !!Object.keys(errors).length}
        />
      </form>
      <Notification
        isSuccessful={isSuccessful}
        type="success"
        message={'Data saved successfully!'}
      />
    </>
  );
};

export default CardForm;
