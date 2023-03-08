import App from "components/Cube";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "three.js/Cube",
  component: App,

  parameters: {
    docs: {
      description: {
        component: "three.js를 활용한 간단한 Cube 예제입니다.",
      },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Default = Template.bind({});
