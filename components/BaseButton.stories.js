import BaseButton from './BaseButton.vue';

export default {
  title: 'Components/Base/Button',
  component: BaseButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'default',
          'white',
          'black',
          'primary',
          'link',
          'info',
          'success',
          'warning',
          'danger'
        ]
      }
    },
    size: { control: { type: 'select', options: ['small', 'normal', 'medium', 'large'] } }
  },
  parameters: {
    jest: ['BaseButton.test.js']
  }
};

const Template = (args, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<base-button @onClick="onClick" v-bind="$props">Button</base-button>'
});

export const Default = Template.bind({});

export const White = Template.bind({});
White.args = {
  type: 'white'
};

export const Black = Template.bind({});
Black.args = {
  type: 'black'
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
};

export const Link = Template.bind({});
Link.args = {
  type: 'link'
};

export const Info = Template.bind({});
Info.args = {
  type: 'info'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Light = Template.bind({});
Light.args = {
  light: true
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  fullwidth: true
};

export const Oulined = Template.bind({});
Oulined.args = {
  oulined: true
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true
};
