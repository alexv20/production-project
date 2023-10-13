import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text className={cls.name} title={t('Production')} theme={TextTheme.INVERTED} />
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>
          {t('Создать статью')}
        </AppLink>
        <div className={cls.links}>
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.link}
            onClick={onLogout}
          >
            {t('Выйти')}
          </Button>
        </div>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.link}
          onClick={onOpenModal}
        >
          {t('Войти')}
        </Button>
      </div>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});
