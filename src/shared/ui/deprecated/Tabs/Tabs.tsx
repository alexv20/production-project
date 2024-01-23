import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
// eslint-disable-next-line relative-paths-slice-fsd/layer-imports
import { ArticleType } from '@/entities/Article';
import cls from './Tabs.module.scss';

export interface TabItem<T extends ArticleType> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends ArticleType> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Tabs = <T extends ArticleType>(props: TabsProps<T>) => {
  const { t } = useTranslation();

  const { className, tabs, value, onTabClick } = props;

  const clickHandle = (tab: TabItem<T>) => () => {
    onTabClick(tab);
  };

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandle(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
