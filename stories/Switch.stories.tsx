import Switch from "../components/Switch";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "styled-components/Switch",
  compnent: Switch,

  parameters: {
    docs: {
      description: {
        component:
          "아이폰 스타일 알림페이지 입니다. 알람을 자유롭게 켜고 꺼보세요.",
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Templete: ComponentStory<typeof Switch> = () => <Switch />;

export const IphoneStyle = Templete.bind({});
