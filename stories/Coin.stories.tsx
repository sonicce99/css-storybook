import App from "components/Coin";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Coin",
  component: App,

  parameters: {
    docs: {
      description: {
        component: "카카오톡 송금하기 버튼 클릭시 나타나는 CSS 입니다.",
      },
    },
  },

  argTypes: {
    width: {
      description: "코인의 크기를 변경할 수 있습니다.",
      control: { type: "number", min: 30, max: 300, step: 30 },
    },

    animation_time: {
      description: "코인의 회전 속도를 변경할 수 있습니다.",
      control: { type: "number", min: 1, max: 10, step: 2 },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 300,
  animation_time: 3,
};
