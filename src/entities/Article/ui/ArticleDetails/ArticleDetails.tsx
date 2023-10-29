import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import ViewIcon from '@/shared/assets/icons/articles/details/views.svg';
import DateIcon from '@/shared/assets/icons/articles/details/date.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleBlock } from '../../model/types/article';
import {
  fetchArticleById,
} from '../../model/services/fetchArticleById/fetchArticleById';
import {
  ArticleTextBlockComponent,
} from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  ArticleImageBlockComponent,
} from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
  ArticleCodeBlockComponent,
} from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/artilceDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent className={cls.block} block={block} key={block.id} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent className={cls.block} block={block} key={block.id} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent className={cls.block} block={block} key={block.id} />;
    default:
      return null;
    }
  }, []);

  let content;
  if (isLoading) {
    content = (
      <VStack max gap="16">
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </VStack>
    );
  } else if (error) {
    content = (
      // eslint-disable-next-line i18next/no-literal-string
      <Text align={TextAlign.CENTER} title="Произошла ошибка при загрузке статьи" />
    );
  } else {
    content = (
      // eslint-disable-next-line i18next/no-literal-string
      <VStack>
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar
            size={200}
            src={article?.img}
            alt="article-img"
          />
        </HStack>
        <VStack gap="4" max>
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <HStack gap="8" className={cls.articleInfo}>
            <Icon Svg={ViewIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap="8" className={cls.articleInfo}>
            <Icon Svg={DateIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </VStack>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
