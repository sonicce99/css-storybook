import App from "components/SouthKorea";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/South-Korea",
  component: App,

  parameters: {
    docs: {
      description: { component: "2022 월드컵을 기념하여 만든 태극기 입니다." },
    },
  },

  argTypes: {
    width: {
      control: { type: "number", min: 300, max: 800, step: 20 },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 800,
};
