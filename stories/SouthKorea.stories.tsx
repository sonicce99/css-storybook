import App from "components/SouthKorea";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/South-Korea",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Default = Template.bind({});
