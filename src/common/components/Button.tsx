import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
    variant?: 'light' | 'dark';
    onClick?: () => void;
    children: ReactNode;
}

export function Button({ variant, onClick, children }: Props) {
    const buttonClass = `${styles["button"]} ${variant === "dark" ? styles["button-dark"] : styles["button-light"]}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};
