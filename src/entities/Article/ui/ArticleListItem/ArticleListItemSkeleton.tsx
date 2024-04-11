import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import { toggleFeatures } from '@/shared/lib/features';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.ArticleListItemRedesigned,
      off: () => cls.ArticleListItem,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });
    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => CardRedesigned,
      off: () => CardDeprecated,
    });

    if (view === ArticleView.LIST) {
      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <Card className={cls.card} paddings="24">
            <VStack gap="16">
              <HStack gap="8">
                <Skeleton height={30} width={30} />
                <Skeleton width={150} height={16} />
              </HStack>
              <Skeleton width={200} height={24} />
              <Skeleton width={250} height={20} />
              <Skeleton height={200} />
              <HStack max justify="between">
                <Skeleton height={28} width={150} />
                <Skeleton height={24} width={100} />
              </HStack>
            </VStack>
          </Card>
        </div>
      );
    }

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <Card max>
          <VStack gap="16" max>
            <VStack gap="8" max>
              <Skeleton width="100%" height={200} />
            </VStack>
            <VStack gap="8" max>
              <Skeleton width="100%" height={18} />
              <Skeleton width={150} height={20} />
            </VStack>
          </VStack>
        </Card>
      </div>
    );
  },
);
