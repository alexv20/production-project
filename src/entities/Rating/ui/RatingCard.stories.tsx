import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
  title: 'entities/Rating',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
