import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LoginButton, LoginButtonProps } from './LoginButton';

export default {
  title: 'molecules/LoginButton',
  component: LoginButton
} as Meta;

const Template: Story<LoginButtonProps> = (args) => <LoginButton {...args} />;

export const ExampleLoginButton = Template.bind({});
ExampleLoginButton.args = {
  text: 'hello'
};
