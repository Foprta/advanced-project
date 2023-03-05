import React, { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

interface Props extends LinkProps {
  theme?: AppLinkTheme
}

export const AppLink: React.FC<PropsWithChildren<Props>> = ({
    className, children, theme = AppLinkTheme.PRIMARY, ...props
}) => (
    <Link
        className={classNames(styles.container, undefined, [className, styles[theme]])}
        {...props}
    >
        {children}
    </Link>
);

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
