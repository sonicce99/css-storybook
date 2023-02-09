import App from "components/LeagueOfLegend";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/League of Legend",
  component: App,

  parameters: {
    docs: {
      description: { component: "리그 오브 레전드 조이 픽창입니다." },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Default = Template.bind({});
