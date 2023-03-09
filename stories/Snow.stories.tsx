import App from "components/Snow";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/Snow",
  component: App,

  parameters: {
    docs: {
      description: { component: "함박눈이 펑펑 내리는 눈 모션입니다." },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Default = Template.bind({});
