import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icon/home-svgrepo-com.svg';
import AboutIcon from 'shared/assets/icon/about-filled-svgrepo-com.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                <AppLink
                    theme={AppLinksTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.mainLink}
                >
                    <div className={cls.contentLink}>
                        <HomeIcon className={cls.iconLink} />
                        {!collapsed && t('main')}
                    </div>
                </AppLink>
                <AppLink theme={AppLinksTheme.SECONDARY} to={RoutePath.about}>
                    <div className={cls.contentLink}>
                        <AboutIcon className={cls.iconLink} />
                        {!collapsed && t('about')}
                    </div>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={!collapsed} className={cls.lang} />
            </div>
        </div>

    );
};

export default Sidebar;
