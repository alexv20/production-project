import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const {
    firstname,
    lastname,
    age,
    city,
    country,
    currency,
  } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  if (!currency) {
    errors.push(ValidateProfileErrors.INCORRECT_CURRENCY);
  }

  return errors;
};
