import App from "components/Barbershop";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/Barbershop",
  component: App,

  parameters: {
    docs: {
      description: { component: "이발소 입니다." },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Default = Template.bind({});
