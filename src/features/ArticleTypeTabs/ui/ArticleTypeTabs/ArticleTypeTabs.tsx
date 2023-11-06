import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { t } = useTranslation();
  const { className, value, onChangeType } = props;

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('ВСЕ'),
    },
    {
      value: ArticleType.IT,
      content: t('АЙТИ'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('НАУКА'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('ЭКОНОМИКА'),
    },
  ], [t]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onChangeType}
    />
  );
});
