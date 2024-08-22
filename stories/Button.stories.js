import React from 'react';

import { Button } from './Button';

const exports = {
  title: 'Examples/Button',
  component: Button,
  args: {
    label: 'Some button'
  },
}
export default exports
const Template = (args) => <Button {...args}/>;
export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  primary: true
}

export const SecondaryButton = Template.bind({})

export const RedButton = Template.bind({});
RedButton.args = {
  backgroundColor: 'red',
  label: 'Red button'
}
export const BlueButton = Template.bind({});
BlueButton.args = {
  backgroundColor: 'blue',
  color: 'white',
  label: 'Blue button'
}