import App from "components/MovingText";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Moving-text",
  component: App,

  argTypes: {
    radius: {
      control: { type: "number", min: 200, max: 500, step: 30 },
    },
    text: {
      control: { control: "text" },
    },
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  radius: 200,
  text: "Hi! My name is Dong Su Lee. I'm Web Front Developer.",
  backgroundColor: "white",
};
