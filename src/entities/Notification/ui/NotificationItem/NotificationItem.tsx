import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeperecated } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;
  const { t } = useTranslation();

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          variant="normal"
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <Text title={item.title} text={item.description} />
        </Card>
      }
      off={
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <TextDeperecated
            title={item.title}
            text={item.description}
            className={cls.content}
          />
        </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <a href={item.href} target="_blank" className={cls.link} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
