import App from "components/Tooltip";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Tooltip",
  component: App,

  argTypes: {
    buttonText: {
      control: { control: "text" },
    },
    text: {
      control: { control: "text" },
    },
    backgroundColor: { control: "color" },
    placement: {
      control: "select",
      options: [
        "topLeft",
        "top",
        "topRight",
        "leftTop",
        "left",
        "leftBottom",
        "rightTop",
        "right",
        "rightBottom",
        "bottomLeft",
        "bottom",
        "bottomRight",
      ],
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: "ToolTip Example",
  text: "Hi! My name is Dong Su Lee. I'm Web Front Developer.",
  backgroundColor: "#a0d911",
  placement: "right",
};
