import { Menu } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import App from 'app/App';
import cls from './Dropdown.module.scss';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
};

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
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>
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
                className={classNames(cls.item, { [cls.active]: active }, [])}
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
