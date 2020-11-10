import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    label: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['', 'primary', 'link', 'info', 'success', 'warning', 'danger']
      }
    },
    size: { control: { type: 'select', options: ['small', 'normal', 'medium', 'large'] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button'
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: 'primary'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  type: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Button',
  type: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  type: 'danger'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large'
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small'
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button',
  light: true
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  label: 'Button',
  fullwidth: true
};

export const Oulined = Template.bind({});
Oulined.args = {
  label: 'Button',
  outlined: true
};

export const Inverted = Template.bind({});
Inverted.args = {
  label: 'Button',
  inverted: true
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Button',
  rounded: true
};
