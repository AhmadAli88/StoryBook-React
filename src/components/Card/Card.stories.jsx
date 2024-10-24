import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'Visual style of the card'
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Padding size of the card'
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has hover effects'
    },
    onClick: { action: 'clicked' }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile card component that can be used to group related content.'
      }
    }
  }
};

const Template = (args) => (
  <Card {...args}>
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-gray-600">
      This is some sample content inside the card. You can put any content here.
    </p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'elevated',
  padding: 'medium'
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  padding: 'medium'
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  padding: 'medium'
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  ...Default.args,
  hoverable: true
};

export const Clickable = Template.bind({});
Clickable.args = {
  ...Default.args,
  hoverable: true,
  onClick: () => alert('Card clicked!')
};

export const Different_Paddings = () => (
  <div className="space-y-4">
    <Card padding="small">
      <p>Small padding</p>
    </Card>
    <Card padding="medium">
      <p>Medium padding</p>
    </Card>
    <Card padding="large">
      <p>Large padding</p>
    </Card>
  </div>
);

export const ComplexContent = () => (
  <Card>
    <img 
      src="/api/placeholder/400/200"
      alt="placeholder" 
      className="w-full h-48 object-cover rounded-t-lg mb-4"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Complex Card Example</h3>
      <p className="text-gray-600 mb-4">
        This card demonstrates how to use the Card component with different types of content
        including images, text, and buttons.
      </p>
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </div>
    </div>
  </Card>
);