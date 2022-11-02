import App from "../components/Dropdown";
import { Story, Meta } from "@storybook/react";
import { Props } from "components/Dropdown/Dropdown";

export default {
  title: "dongsu/Dropdown",
  component: App,
} as Meta;

const Template: Story<Props> = () => <App />;

export const Default = Template.bind({});
