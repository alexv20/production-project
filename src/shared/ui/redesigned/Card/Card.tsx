import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'square' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardTheme;
  max?: boolean;
  paddings?: CardPadding;
  border?: CardBorder;
  fullHeight?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    paddings = '8',
    border = 'normal',
    fullHeight = false,
    ...otherProps
  } = props;

  const paddingClasses = mapPaddingToClass[paddings];

  return (
    <div
      className={classNames(
        cls.Card,
        { [cls.max]: max, [cls.fullHeight]: fullHeight },
        [className, cls[variant], cls[paddingClasses], cls[border]],
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
});
