import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ArticleType } from '@/entities/Article';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: ArticleType.ALL,
      content: 'ALL',
    },
    {
      value: ArticleType.IT,
      content: 'IT',
    },
    {
      value: ArticleType.SCIENCE,
      content: 'SCIENCE',
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'ECONOMICS',
    },
  ],
  value: ArticleType.ALL,
  onTabClick: action('onTabClick'),
};
