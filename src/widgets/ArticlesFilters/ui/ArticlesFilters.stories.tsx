import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlagsDecorator';

export default {
  title: 'widgets/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => (
  <ArticlesFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })];
