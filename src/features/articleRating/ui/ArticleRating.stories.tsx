import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { articleRating } from './ArticleRating';

export default {
  title: 'slice/articleRating',
  component: articleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof articleRating>;

const Template: ComponentStory<typeof articleRating> = (args) => <articleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
