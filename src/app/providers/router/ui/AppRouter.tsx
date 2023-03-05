import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPageAsync } from '@/pages/main';
import { AboutPageAsync } from '@/pages/about';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="page-wrapper">
            <Routes>
                {Object
                    .values(routeConfig)
                    .map(({ element, path }) => (<Route key={path} path={path} element={element} />))}
            </Routes>
        </div>
    </Suspense>
);
export default AppRouter;
