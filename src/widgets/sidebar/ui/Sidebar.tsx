import React, { useCallback } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/themeSwitcher';
import { LangSwitcher } from '@/widgets/langSwitcher';
import { Button } from '@/shared/ui';

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const onToggle = useCallback(() => {
        setCollapsed((val) => !val);
    }, []);

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed })}>
            <Button onClick={onToggle}>toggle</Button>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
