import Switch from "../components/Switch";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Switch",
  compnent: Switch,
} as ComponentMeta<typeof Switch>;

const Templete: ComponentStory<typeof Switch> = () => <Switch />;

export const IphoneStyle = Templete.bind({});
