import Input from './Input';

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel'],
      description: 'Type of input field'
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'flushed'],
      description: 'Visual variant of the input'
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the input field'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required'
    },
    onChange: { action: 'changed' }
  },
  parameters: {
    docs: {
      description: {
        component: 'A flexible input component that supports different variants, sizes, and states.'
      }
    }
  }
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username admin',
  id: 'username'
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...Default.args,
  helperText: 'This is some helpful text'
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'This field is required'
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  id: 'password'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};

export const Variants = () => (
  <div className="space-y-4">
    <Input
      label="Outlined Input"
      placeholder="Outlined variant"
      variant="outlined"
    />
    <Input
      label="Filled Input"
      placeholder="Filled variant"
      variant="filled"
    />
    <Input
      label="Flushed Input"
      placeholder="Flushed variant"
      variant="flushed"
    />
  </div>
);

export const Sizes = () => (
  <div className="space-y-4">
    <Input
      label="Small Input"
      placeholder="Small size"
      size="small"
    />
    <Input
      label="Medium Input"
      placeholder="Medium size"
      size="medium"
    />
    <Input
      label="Large Input"
      placeholder="Large size"
      size="large"
    />
  </div>
);