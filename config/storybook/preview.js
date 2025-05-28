import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/routeDecorator/routeDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
