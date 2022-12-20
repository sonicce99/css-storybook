import App from "components/3Ddice";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/3D Dice",
  component: App,

  argTypes: {
    width: {
      control: { type: "number", min: 50, max: 500, step: 50 },
    },

    perspective: {
      control: { type: "number", min: 20, max: 600, step: 20 },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 200,
  perspective: 600,
};
