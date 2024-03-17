import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

export type CardBorder = 'round' | 'square' | 'partial' | string;

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: CardBorder;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border = 'partial' } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className, cls[border]])}
      style={styles}
    />
  );
});
