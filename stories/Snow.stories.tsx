import App from "components/Snow";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Snow",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Default = Template.bind({});
