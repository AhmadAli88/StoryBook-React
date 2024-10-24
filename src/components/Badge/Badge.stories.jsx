import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
      description: 'The visual style of the badge'
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the badge'
    },
    removable: {
      control: 'boolean',
      description: 'Whether the badge can be removed'
    },
    onRemove: { action: 'removed' }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile badge component for status indicators, tags, and labels.'
      }
    }
  }
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Badge',
  variant: 'default',
  size: 'medium'
};

export const AllVariants = () => (
  <div className="space-x-2">
    <Badge variant="default">Default</Badge>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="info">Info</Badge>
  </div>
);

export const AllSizes = () => (
  <div className="space-x-2">
    <Badge size="small">Small</Badge>
    <Badge size="medium">Medium</Badge>
    <Badge size="large">Large</Badge>
  </div>
);

export const Removable = Template.bind({});
Removable.args = {
  children: 'Removable Badge',
  removable: true,
  onRemove: () => console.log('Badge removed')
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  children: 'Custom Badge',
  className: 'bg-purple-100 text-purple-800'
};

export const TagGroup = () => (
  <div className="flex flex-wrap gap-2">
    <Badge variant="primary" removable>React</Badge>
    <Badge variant="primary" removable>TypeScript</Badge>
    <Badge variant="primary" removable>Tailwind</Badge>
    <Badge variant="primary" removable>Storybook</Badge>
  </div>
);