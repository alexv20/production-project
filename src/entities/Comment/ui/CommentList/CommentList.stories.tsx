import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'comm',
      user: {
        id: '1',
        username: 'Ivan',
      },
    },
    {
      id: '2',
      text: 'comm2',
      user: {
        id: '2',
        username: 'Petr',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
