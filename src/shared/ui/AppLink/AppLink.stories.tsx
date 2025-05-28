import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AppLink, { AppLinksTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        theme: AppLinksTheme,
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = { theme: AppLinksTheme.PRIMARY, children: 'Text' };

export const Secondary = Template.bind({});
Secondary.args = { theme: AppLinksTheme.SECONDARY, children: 'Text' };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { theme: AppLinksTheme.PRIMARY, children: 'Text' };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = { theme: AppLinksTheme.SECONDARY, children: 'Text' };
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
