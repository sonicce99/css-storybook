import App from "components/Sphere";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Sphere",
  component: App,

  parameters: {
    docs: {
      description: { component: "3차원 구체입니다." },
    },
  },

  argTypes: {
    lines: {
      description: "구체를 만드는 선의 숫자를 조절 할 수 있습니다.",
      control: { type: "number", min: 0, max: 70, step: 10 },
    },

    width: {
      description: "구체를 너비를 조절 할 수 있습니다.",
      control: { type: "number", min: 100, max: 600, step: 100 },
    },

    height: {
      description: "구체를 높이를 조절 할 수 있습니다.",
      control: { type: "number", min: 100, max: 600, step: 100 },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  lines: 70,
  width: 500,
  height: 500,
};
