import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MainText , MainTextProps } from './MainText';

export default {
  title: 'organisms/MainText',
  component: MainText
} as Meta;

const Template: Story<MainTextProps> = (args) => <MainText  {...args} />;

export const ExampleMainText = Template.bind({});
ExampleMainText.args = {
  text: 'hello'
};
