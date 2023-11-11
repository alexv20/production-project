import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/AvatarImg.jpg';
import { ProfileCard } from '../ProfileCard/ProfileCard';

export default {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    firstname: 'Alex',
    lastname: 'Vasiliev',
    age: 24,
    city: 'Kazan',
    country: Country.Russia,
    currency: Currency.RUB,
    avatar,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
  error: 'Error!',
};
