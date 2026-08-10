import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'link'
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    disabled = false,
    className,
    onClick,
    ...restProps
}) => {
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
            {...restProps}
        >
            {children}
        </button>
    );
};