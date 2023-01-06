import App from "components/Swiper";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Swiper",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Default = Template.bind({});
