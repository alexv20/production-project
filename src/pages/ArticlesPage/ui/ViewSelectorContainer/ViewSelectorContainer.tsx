import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './ViewSelectorContainer.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  (props: ViewSelectorContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch],
    );

    return (
      <ArticleViewSelector
        view={view}
        onViewClick={onChangeView}
        className={cls.viewSelector}
      />
    );
  },
);
