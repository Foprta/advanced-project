import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';
import { Button } from '@/shared/ui';

export const LangSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button className={styles.container} onClick={toggle}>
            {Languages[i18n.language]}
        </Button>
    );
};

const Languages: Record<string, string> = {
    en: 'English',
    ru: 'Русский',
};
