import App from "components/MovingText";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Moving-text",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Circle = Template.bind({});
