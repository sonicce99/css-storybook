import App from "components/Tooltip";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Tooltip",
  component: App,

  argTypes: {
    text: {
      control: { control: "text" },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Hi! My name is Dong Su Lee. I'm Web Front Developer.",
};
