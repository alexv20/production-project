import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  defaultPlaceholder?: boolean;
  readonly?: boolean;
}


export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    placeholder,
    value,
    onChange,
    autofocus = false,
    defaultPlaceholder = false,
    readonly,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={cls.InputWrapper}>
      {placeholder && !defaultPlaceholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <input
        className={classNames(cls.Input, {}, [className])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        autoFocus={autofocus}
        readOnly={readonly}
        placeholder={defaultPlaceholder ? placeholder : ''}
        {...otherProps}
      />
    </div>
  );
});
