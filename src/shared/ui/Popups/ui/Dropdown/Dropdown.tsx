import { Menu } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../styles/consts';
import cls from './Dropdown.module.scss';
import popupCls from '../styles/popup.module.scss';

interface DropdownItem {
  disabled?: boolean,
  content?: ReactNode,
  onClick?: () => void,
  href?: string
}

interface DropdownProps {
  className?: string,
  items: DropdownItem[],
  trigger: ReactNode,
  direction: DropdownDirection
}

export function Dropdown(props: DropdownProps) {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right',
  } = props;

  const optionsClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, optionsClasses)}>
        {
          items.map((item) => {
            const content = ({ active }: {active: boolean}) => (
              <button
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={classNames(
                  cls.item,
                  { [cls.active]: active },
                  [],
                )}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return (
                <Menu.Item as={AppLink} to={item.href} key={String(item.content)} disabled={item.disabled}>
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item as={Fragment} key={String(item.content)} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          })
        }
      </Menu.Items>
    </Menu>
  );
}
