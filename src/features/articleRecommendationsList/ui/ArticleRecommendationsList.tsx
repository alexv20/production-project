import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = (
  props: ArticleRecommendationsListProps,
) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack
      gap="8"
      className={classNames('', {}, [className])}
      data-testid="ArticleRecommendationsList"
    >
      <Text size={TextSize.L} title={t('Рекомендуем')} />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        target="_blank"
        className={cls.list}
      />
    </VStack>
  );
};
