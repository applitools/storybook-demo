import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Section } from './Section';

const exports = {
  title: 'Examples/Section',
  component: Section,
  args: {
    text: 'Main section'
  }
}
export default exports
const Template = (args) => <Section {...args} />;

export const MainSection = Template.bind({});