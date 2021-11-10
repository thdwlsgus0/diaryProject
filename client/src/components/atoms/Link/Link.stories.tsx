import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Link , LinkProps } from './Link';

export default {
	title: 'atom/Link',
	component: Link
  } as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const ExampleLink = Template.bind({});
ExampleLink.args = {
	text: 'hello'
} 