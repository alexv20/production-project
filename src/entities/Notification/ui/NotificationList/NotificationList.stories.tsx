import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlagsDecorator';

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Уведомление 1',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Уведомление 2',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Уведомление 3',
        },
      ],
    },
  ],
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};
NormalRedesigned.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Уведомление 1',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Уведомление 2',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Уведомление 3',
        },
      ],
    },
  ],
};
NormalRedesigned.decorators = [
  FeatureFlagsDecorator({ isAppRedesigned: true }),
];
