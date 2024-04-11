import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlagsDecorator';

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  item: {
    title: 'Title',
    id: '1',
    description: 'Description',
  },
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
  item: {
    title: 'Title',
    id: '1',
    description: 'Description',
  },
};
NormalRedesigned.decorators = [
  FeatureFlagsDecorator({ isAppRedesigned: true }),
];
