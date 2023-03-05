import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: React.FC<Props> = (props) => {
    const { className, theme = ButtonTheme.CLEAR, ...rest } = props;

    return (
        <button
            type="button"
            className={classNames(styles.Button, undefined, [className, styles[theme]])}
            {...rest}
        />
    );
};

export enum ButtonTheme {
  CLEAR = 'clear',
}
