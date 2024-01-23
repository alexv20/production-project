import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  items: [
    { content: 'item 1', value: '1' },
    { content: 'item 3', value: '3' },
  ],
  defaultValue: 'List',
};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: 'top left',
  items: [
    { content: 'item 1', value: '1' },
    { content: 'item 3', value: '3' },
  ],
  defaultValue: 'List',
};

export const topRight = Template.bind({});
topRight.args = {
  direction: 'top right',
  items: [
    { content: 'item 1', value: '1' },
    { content: 'item 3', value: '3' },
  ],
  defaultValue: 'List',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: 'bottom left',
  items: [
    { content: 'item 1', value: '1' },
    { content: 'item 3', value: '3' },
  ],
  defaultValue: 'List',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: 'bottom right',
  items: [
    { content: 'item 1', value: '1' },
    { content: 'item 3', value: '3' },
  ],
  defaultValue: 'List',
};
