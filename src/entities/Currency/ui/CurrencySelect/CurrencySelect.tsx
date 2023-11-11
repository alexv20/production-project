import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const currencyOptions = useMemo(
      () =>
        Object.entries(Currency).map((val) => ({
          value: val[0],
          content: val[1],
        })),
      [],
    );

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <ListBox
        defaultValue={t('Укажите валюту')}
        items={currencyOptions}
        value={value}
        onChange={onChangeHandler}
        className={classNames('', {}, [className])}
        readonly={readonly}
        direction="top right"
        label={t('Валюта')}
      />
    );
  },
);
