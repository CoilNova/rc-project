import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'text',
    theme: ThemeButton.OUTLINE,
};
