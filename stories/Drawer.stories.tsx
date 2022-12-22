import App from "../components/Drawer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Drawer",
  component: App,

  argTypes: {
    title: {
      control: { control: "text" },
    },
    contents: {
      control: { control: "text" },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Hi! My name is Dong Su Lee.",
  contents:
    "I'm Web Front Developer.\nI'm Web Front Developer.\nI'm Web Front Developer.\n",
};
