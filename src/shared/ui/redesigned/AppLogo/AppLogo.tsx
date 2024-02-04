import { memo } from 'react';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => (
  <div className={classNames(cls.appLogoWrapper, {}, [className])}>
    <div className={cls.gradient} />
    <AppSvg width={size} height={size} color="black" className={cls.appLogo} />
  </div>
));
