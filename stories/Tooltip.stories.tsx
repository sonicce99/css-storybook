import App from "components/Tooltip";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/Tooltip",
  component: App,

  parameters: {
    docs: {
      description: {
        component: "Tooltip의 방향에 맞게 포인터가 조절됩니다.",
      },
    },
  },

  argTypes: {
    text: {
      description: "원하는 텍스트로 변경할 수 있습니다.",
      control: { control: "text" },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Hi! My name is Dong Su Lee. I'm Web Front Developer.",
};
