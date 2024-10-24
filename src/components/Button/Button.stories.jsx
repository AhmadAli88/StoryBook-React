import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'The visual style of the button'
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    onClick: { action: 'clicked' }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component that supports different variants, sizes, and states.'
      }
    }
  }
};

// Template for all button stories
const Template = (args) => <Button {...args} />;

// Default button
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  size: 'medium'
};

// Secondary button
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  size: 'medium'
};

// Danger button
export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  variant: 'danger',
  size: 'medium'
};

// Different sizes
export const Sizes = () => (
  <div className="flex gap-4 items-center">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true
};