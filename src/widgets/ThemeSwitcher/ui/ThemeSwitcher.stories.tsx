import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {

    },
    args: {

    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = { };

export const Dark = Template.bind({});
Dark.args = { };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
