import React, { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import CheckIcon from 'shared/assets/icons/check.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { DropdownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../styles/consts';
import popupCls from '../styles/popup.module.scss';

export interface ListBoxItem {
  value: string,
  content: ReactNode,
  disabled?: boolean
}

interface ListBoxProps {
  className?: string,
  items: ListBoxItem[],
  value?: string,
  defaultValue?: string,
  onChange?: <T extends string>(value: T) => void,
  readonly?: boolean,
  direction?: DropdownDirection
  label?: string
}

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;

  const optionsClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <HStack align="center" gap="4">
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <HListBox
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={popupCls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (

                <li
                  className={classNames(
                    cls.item,
                    { [popupCls.active]: active, [popupCls.disabled]: item.disabled },
                  )}
                >
                  {selected && <CheckIcon className={cls.checkIcon} />}
                  <p className={cls.itemText}>{item.content}</p>
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
