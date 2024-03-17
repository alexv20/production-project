import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlagsDecorator';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

const NormalArgs = {
  comment: {
    id: '1',
    text: 'hello',
    user: {
      id: '1',
      username: 'Ivan',
      avatar: '',
    },
  },
};

export const Normal = Template.bind({});
Normal.args = NormalArgs;
Normal.decorators = [];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = NormalArgs;
NormalRedesigned.decorators = [
  FeatureFlagsDecorator({ isAppRedesigned: true }),
];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
