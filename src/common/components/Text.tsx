import { CSSProperties, ReactNode } from 'react';
import styles from './Text.module.scss';

interface Props {
    variant?: 'normal' | 'bold' | 'header';
    color?: string;
    children: ReactNode;
    style?: CSSProperties;
}

export function Text({ variant, color = 'white', children, style={} }:Props) {
    let textStyle;

    switch (variant) {
        case 'normal':
            textStyle = styles.normal;
            break;
        case 'bold':
            textStyle = styles.bold;
            break;
        case 'header':
            textStyle = styles.header;
            break;
        default:
            textStyle = styles.normal;
    }

    return <span className={textStyle} style={{ color, ...style }}>{children}</span>;
};

export default Text;
