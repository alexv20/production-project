import React, { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

export const CountrySelect = memo((
  {
    className, value, onChange, readonly,
  }: CountrySelectProps,
) => {
  const { t } = useTranslation('profile');

  const countryOptions = useMemo(
    () => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })),
    [],
  );

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    // <Select
    //   className={classNames('', {}, [className])}
    //   label={t('Страна')}
    //   options={countryOptions}
    //   value={value}
    //   onChange={onChangeHandler}
    //   readonly={readonly}
    // />
    <ListBox
      defaultValue={t('Укажите страну')}
      items={countryOptions}
      value={value}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
      readonly={readonly}
      direction="top right"
      label={t('Страна')}
    />
  );
});
