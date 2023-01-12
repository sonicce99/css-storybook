import Loading from "components/Loading";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Loading",
  compnent: Loading,
} as ComponentMeta<typeof Loading>;

const Templete: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Templete.bind({});
