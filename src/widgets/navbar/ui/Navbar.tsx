import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

interface Props {
  className?: string
}

export const Navbar: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, undefined, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
