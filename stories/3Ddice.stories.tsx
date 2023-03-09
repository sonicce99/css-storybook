import App from "components/3Ddice";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/3D Dice",
  component: App,

  parameters: {
    docs: {
      description: { component: "3차원 주사위입니다." },
    },
  },

  argTypes: {
    width: {
      description: "너비를 조절합니다.",
      control: { type: "number", min: 50, max: 500, step: 50 },
    },

    perspective: {
      description: "원근감을 조절합니다.",
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
