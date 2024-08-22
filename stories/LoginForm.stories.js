import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { LoginForm } from './LoginForm';

const clickSubmitDelay = 1000;
const exports = {
  title: 'Examples/Login',
  component: LoginForm,
  args: {
    clickSubmitDelay,
  },
}
export default exports
const Template = (args) => <LoginForm {...args} />;

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('email'), 'email@example.com', {delay: 100});
  await userEvent.type(canvas.getByTestId('password'), '12345678', {delay: 100});
  await new Promise((resolve) => setTimeout(resolve, clickSubmitDelay));
  await userEvent.click(canvas.getByRole('button'));
};
