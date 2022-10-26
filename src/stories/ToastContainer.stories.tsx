import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ToastContainer from '@/components/ToastContainer';
import { ToastContainerProps } from '@/interfaces';
import { AnimationTypes, PositionTypes, Spaces } from '@/constants';
import toastService from '@/ToastService';

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
  args: ToastContainerProps,
) => <ToastContainer {...args} />;

toastService.generateToast({ label: 'error toast', variant: 'error' });

export const ExampleToast = Template.bind({});
ExampleToast.args = {
  toasts: toastService.generateToast({ label: 'success toast' }),
  deleteToast: toastService.deleteToast,
};

/* variant: {
      name: "variant",
      type: { name: "string", required: false },
      defaultValue: ToastVariants.info,
      description: "Variant of the toast",
      options: Object.values(ToastVariants),
      control: {
        type: "inline-radio",
      },
    },
    label: {
      name: "label",
      type: { name: "string", required: true },
      defaultValue: "Notification!",
      description: "LAbel to the toast",
      control: {
        type: "text",
      },
    },
    color: {
      name: "color",
      type: { name: "string", required: false },
      description: "Optional prop, color of the toast background",
      control: {
        type: "color",
      },
    }, */
