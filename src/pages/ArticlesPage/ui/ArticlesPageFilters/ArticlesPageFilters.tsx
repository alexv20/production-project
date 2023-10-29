import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleView,
  ArticleViewSelector,
  ArticleTypeTabs,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { TabItem } from '@/shared/ui/Tabs/Tabs';

import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const onChangeView = useCallback((view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 250);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((type: TabItem<ArticleType>) => {
      dispatch(articlesPageActions.setType(type.value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    }, [dispatch, fetchData]);

    return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            sort={sort}
            order={order}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
          />
          <ArticleViewSelector
            view={view}
            onViewClick={onChangeView}
            className={cls.viewSelector}
          />
        </div>
        <Card className={cls.search}>
          <Input
            placeholder={t('Поиск')}
            value={search}
            onChange={onChangeSearch}
          />
        </Card>
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
        />
      </div>
    );
  },
);
