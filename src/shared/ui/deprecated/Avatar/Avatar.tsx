import React, { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import AvatarLogo from '../../../assets/icons/avatar.svg';
import { Icon } from '../../redesigned/Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Avatar = (props: AvatarProps) => {
  const mods: Mods = {};

  const { className, src, alt, size, fallbackInverted } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      Svg={AvatarLogo}
      width={size}
      height={size}
    />
  );

  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};
