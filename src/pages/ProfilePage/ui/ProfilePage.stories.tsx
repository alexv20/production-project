import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/AvatarImg.jpg';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      firstname: 'Alex',
      lastname: 'Vasiliev',
      age: 24,
      city: 'Kazan',
      country: Country.Russia,
      currency: Currency.RUB,
      avatar,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      firstname: 'Alex',
      lastname: 'Vasiliev',
      age: 24,
      city: 'Kazan',
      country: Country.Russia,
      currency: Currency.RUB,
      avatar,
    },
  },
}), ThemeDecorator(Theme.DARK)];
