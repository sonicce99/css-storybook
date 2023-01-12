import ScrollBar from "../components/ScrollBar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/ScrollBar",
  component: ScrollBar,
} as ComponentMeta<typeof ScrollBar>;

const Template: ComponentStory<typeof ScrollBar> = () => <ScrollBar />;

export const Default = Template.bind({});
