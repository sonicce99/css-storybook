import App from "components/Magazine";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/Magazine",
  component: App,

  parameters: {
    docs: {
      description: {
        component: "캠핏 광고에 사용되기 위한 애니메이션입니다.",
      },
    },
  },

  argTypes: {
    text: {
      description: "글자 내용을 변경 할 수 있습니다.",
      control: { control: "text" },
    },
  },
  showBorder: {
    description: "가이드 border를 표시합니다",
    control: { type: "boolean" },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "  DIVERSE BUSTLING  CULTURAL MELTING POT BUTTON ",
  showBorder: false,
};
