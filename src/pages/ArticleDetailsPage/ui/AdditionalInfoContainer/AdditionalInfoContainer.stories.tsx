import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';
import { Article } from '@/entities/Article';

const article: Partial<Article> = {
  id: '1',
  user: {
    id: '1',
    username: 'admin',
  },
  createdAt: '04.04.2024',
  views: 404,
};

export default {
  title: 'pages/ArticleDetailsPage/AdditionalInfoContainer',
  component: AdditionalInfoContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AdditionalInfoContainer>;

const Template: ComponentStory<typeof AdditionalInfoContainer> = () => (
  <AdditionalInfoContainer />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];
