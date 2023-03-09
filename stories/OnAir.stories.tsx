import App from "components/OnAir";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/On Air",
  component: App,

  argTypes: {
    viewers: {
      description: "시청자 수를 변경할 수 있습니다.",
      control: { type: "number", min: 1, max: 30, step: 1 },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  viewers: 10,
};
