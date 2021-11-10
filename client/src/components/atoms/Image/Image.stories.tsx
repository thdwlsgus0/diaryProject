import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Image , ImageProps } from './Image';

export default {
	title: 'atom/Image',
	component: Image
  } as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const ExampleImage = Template.bind({});
ExampleImage.args = {
	text: 'hello'
} 