import App from "components/OnAir";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/On Air",
  component: App,

  argTypes: {
    viewers: {
      control: { type: "number", min: 1, max: 30, step: 1 },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  viewers: 10,
};
