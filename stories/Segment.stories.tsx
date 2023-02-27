import App from "components/Segment";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Segment",
  component: App,

  parameters: {
    docs: {
      description: { component: "숫자를 표시 할 수 있는 세그먼트입니다." },
    },
  },

  argTypes: {
    number: {
      description: "렌더링 하고 싶은 숫자를 표시할 수 있습니다.",
      control: { type: "number", min: 1, max: 999, step: 1 },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 200,
};
