import './styles/index.scss';
import React, { Suspense } from 'react';
import { useTheme } from './providers/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', undefined, [theme])}>

            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
