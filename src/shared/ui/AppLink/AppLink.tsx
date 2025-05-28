import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss'; 

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY='secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinksTheme;
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className, children, to, theme = AppLinksTheme.PRIMARY,
    } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};

export default AppLink;
