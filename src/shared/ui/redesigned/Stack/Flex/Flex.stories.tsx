import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/redesigned/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Direction = Template.bind({});
Direction.args = {
  direction: 'row',
  children: (
    <>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </>
  ),
};

export const Justify = Template.bind({});
Justify.args = {
  justify: 'start',
  children: (
    <>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </>
  ),
};

export const Align = Template.bind({});
Align.args = {
  align: 'start',
  children: (
    <>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </>
  ),
};

export const Gap = Template.bind({});
Gap.args = {
  gap: '4',
  children: (
    <>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </>
  ),
};
