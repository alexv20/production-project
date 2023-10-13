import React, {
  ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { useTranslation } from 'react-i18next';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

export const CurrencySelect = memo((
  {
    className, value, onChange, readonly,
  }: CurrencySelectProps,
) => {
  const { t } = useTranslation('profile');

  const currencyOptions = useMemo(
    () => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })),
    [],
  );

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Валюта')}
      options={currencyOptions}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
