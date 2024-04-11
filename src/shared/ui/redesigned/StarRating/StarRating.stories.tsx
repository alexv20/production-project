import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlagsDecorator';

export default {
  title: 'shared/redesigned/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
  <StarRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })];
