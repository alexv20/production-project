import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StoryIcon from '@/shared/assets/icons/home.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { RoutePath } from '@/shared/const/router';

export default {
  title: 'widgets/Sidebar/SidebarItem',
  component: SidebarItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Light = Template.bind({});
Light.args = {
  item: {
    text: 'Main',
    path: RoutePath.main,
    Icon: StoryIcon,
  },
  collapsed: false,
};
Light.decorators = [
  StoreDecorator({ user: { authData: {} } }),
];

export const LightCollapsed = Template.bind({});
LightCollapsed.args = {
  item: {
    text: 'Main',
    path: RoutePath.main,
    Icon: StoryIcon,
  },
  collapsed: true,
};
LightCollapsed.decorators = [
  StoreDecorator({ user: { authData: {} } }),
];

export const Dark = Template.bind({});
Dark.args = {
  item: {
    text: 'Main',
    path: RoutePath.main,
    Icon: StoryIcon,
  },
  collapsed: false,
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: {} } }),
];

export const DarkCollapsed = Template.bind({});
DarkCollapsed.args = {
  item: {
    text: 'Main',
    path: RoutePath.main,
    Icon: StoryIcon,
  },
  collapsed: true,
};
DarkCollapsed.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: {} } }),
];
