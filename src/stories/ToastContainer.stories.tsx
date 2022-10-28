import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ToastContainer from '@/components/ToastContainer';
import { ToastContainerProps } from '@/interfaces';
import { AnimationTypes, PositionTypes, Spaces } from '@/constants';
import createToast from '@/utils/createToast';

export default {
  title: 'ToastContainer',
  component: ToastContainer,
  argTypes: {
    position: {
      name: 'position',
      type: { name: 'string', required: false },
      defaultValue: PositionTypes.bottomRight,
      description: 'Where toast is shown on the screen',
      options: Object.values(PositionTypes),
      control: {
        type: 'inline-radio',
      },
    },
    spaces: {
      name: 'spaces',
      type: { name: 'string', required: false },
      defaultValue: Spaces[1],
      description: 'Margins of the toast',
      options: Object.values(Spaces),
      control: {
        type: 'inline-radio',
      },
    },
    deleteTime: {
      name: 'deleteTime',
      type: { name: 'string', required: false },
      defaultValue: undefined,
      options: [undefined, 1, 2, 3, 5, 10],
      description: 'Delay of toast auto deletion (never if not specified)',
      control: {
        type: 'inline-radio',
      },
    },
    animation: {
      name: 'animation',
      type: { name: 'string', required: false },
      defaultValue: undefined,
      options: [undefined, ...Object.values(AnimationTypes)],
      description: 'Animation of showing and hiding a toast',
      control: {
        type: 'inline-radio',
      },
    },
  },
} as ComponentMeta<typeof ToastContainer>;

const Template: ComponentStory<typeof ToastContainer> = (
  args: ToastContainerProps
) => <ToastContainer {...args} />;

createToast({ label: 'error toast', variant: 'error' });
createToast({ label: 'warning toast', variant: 'warning' });
const toasts = createToast({ label: 'success toast' });

export const ExampleToast = Template.bind({});
ExampleToast.args = {
  ...toasts,
};
