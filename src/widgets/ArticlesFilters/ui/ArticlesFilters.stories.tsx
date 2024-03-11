import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';

export default {
  title: 'slice/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
