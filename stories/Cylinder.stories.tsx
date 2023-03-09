import App from "components/Cylinder";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/Cylinder",
  component: App,

  parameters: {
    docs: {
      description: { component: "3차원 원기둥입니다." },
    },
  },

  argTypes: {
    radius: {
      description: "원기둥의 반지름을 변경할 수 있습니다.",
      control: { type: "number", min: 100, max: 200, step: 40 },
    },

    faceCount: {
      description: "원기둥 면의 갯수 변경할 수 있습니다.",
      control: { type: "number", min: 20, max: 60, step: 10 },
    },

    rotateX: {
      description: "원기둥 원기둥의 기울기를 변경할 수 있습니다.",
      control: { type: "number", min: -180, max: 180, step: 15 },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  radius: 150,
  faceCount: 60,
  rotateX: -15,
};
