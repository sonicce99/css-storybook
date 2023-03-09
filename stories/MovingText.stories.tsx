import App from "components/MovingText";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/Moving Text",
  component: App,

  argTypes: {
    radius: {
      description: "반지름을 조절 할 수 있습니다.",
      control: { type: "number", min: 200, max: 500, step: 30 },
    },
    text: {
      description: "글자 내용을 변경 할 수 있습니다.",
      control: { control: "text" },
    },
    textColor: {
      description: "글자 색상을 변경 할 수 있습니다.",
      control: "color",
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  radius: 200,
  text: "Hi! My name is Dong Su Lee. I'm Web Front Developer.",
  textColor: "white",
};
