import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text:
    'export default {\n' +
    "  title: 'slice/Code',\n" +
    '  component: Code,\n' +
    '  argTypes: {\n' +
    "    backgroundColor: { control: 'color' },\n" +
    '  },\n' +
    '  args: {\n' +
    "    to: '/',\n" +
    '  },\n' +
    '} as ComponentMeta<typeof Code>;',
};
