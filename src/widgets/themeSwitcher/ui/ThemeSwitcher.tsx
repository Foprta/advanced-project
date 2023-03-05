import React from 'react';
import { Theme, useTheme } from '@/app/providers/theme';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button } from '@/shared/ui';

export const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme}>

            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
