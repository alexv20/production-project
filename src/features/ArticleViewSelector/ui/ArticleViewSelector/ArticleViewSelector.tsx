import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'src/shared/ui/deprecated/Icon';
import { Button, ButtonTheme } from 'src/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/articles/details/list.svg';
import GridIcon from '@/shared/assets/icons/articles/details/grid.svg';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          className={cls.viewSelector}
        >
          <Icon
            width={24}
            height={24}
            Svg={viewType.icon}
            className={classNames('', {
              [cls.selected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
