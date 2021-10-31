import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SignUpButton, SignUpButtonProps } from './SignUpButton';

export default {
  title: 'molecules/SignUpButton',
  component: SignUpButton
} as Meta;

const Template: Story<SignUpButtonProps> = (args) => <SignUpButton {...args} />;

export const ExampleSignUpButton = Template.bind({});
ExampleSignUpButton.args = {
  text: 'hello'
};
