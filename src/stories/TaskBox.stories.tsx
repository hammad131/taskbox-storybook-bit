import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TaskBox, { taskBoxProps } from '../components/Taskbox/index'

export default {
    title: 'Example/TaskBox',
    component: TaskBox,

} as Meta;

const Template: Story<taskBoxProps> = (args) => <TaskBox {...args} />;
const tasks = [
    { title: 'Breakfast', done: false },
    { title: 'Workout', done: true },
    { title: 'Read', done: false },
]
export const Primary = Template.bind({});
Primary.args = {
    tasks: tasks,
    theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    tasks: tasks,
    theme: "secondary",
};
