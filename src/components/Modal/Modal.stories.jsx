import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Size of the modal'
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether clicking the overlay closes the modal'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A flexible modal/dialog component with various sizes and customization options.'
      }
    }
  }
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Open Modal Ahmad
      </button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Example Modal',
  children: (
    <div>
      <p>This is an example modal content. You can put any content here.</p>
    </div>
  )
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Modal with Footer',
  children: (
    <div>
      <p>This modal includes footer buttons for actions.</p>
    </div>
  ),
  footer: (
    <div className="flex justify-end space-x-2">
      <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
        Cancel
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Confirm
      </button>
    </div>
  )
};

export const LongContent = Template.bind({});
LongContent.args = {
  title: 'Scrollable Modal',
  children: (
    <div>
      {Array(20).fill(null).map((_, i) => (
        <p key={i} className="mb-4">
          This is paragraph {i + 1} with some sample content to demonstrate scrolling.
        </p>
      ))}
    </div>
  )
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  title: 'Large Modal',
  size: 'large',
  children: (
    <div>
      <p>This is a large modal with custom size.</p>
    </div>
  )
};

export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
  title: 'No Close Button',
  showCloseButton: false,
  children: (
    <div>
      <p>This modal doesn't show the close button in the corner.</p>
    </div>
  )
};

export const FormExample = Template.bind({});
FormExample.args = {
  title: 'Create Account',
  children: (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </form>
  ),
  footer: (
    <div className="flex justify-end space-x-2">
      <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
        Cancel
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Create Account
      </button>
    </div>
  )
};