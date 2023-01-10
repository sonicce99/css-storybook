import App from "components/Swiper";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "dongsu/Swiper",
  component: App,

  argTypes: {
    navigation: {
      description: "화살표 버튼을 눌러 한 페이지씩 이동할 수 있습니다.",
      control: { type: "boolean" },
    },
    pagination: {
      description: "bullet 버튼을 눌러 여러 페이지를 이동할 수 있습니다.",
      control: { type: "boolean" },
    },
    autoplay: {
      description: "무한 재생 되도록 설정할 수 있습니다.",
      table: {
        category: "Autoplay",
      },
      control: { type: "boolean" },
    },
    delay: {
      description: "autoplay의 딜레이 시간을 설정할 수 있습니다.",
      if: { arg: "autoplay", truthy: true },
      control: { type: "number", min: 1000, max: 5000, step: 1000 },
      table: {
        category: "Autoplay",
      },
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  navigation: true,
  pagination: true,
  autoplay: true,
  delay: 3000,
};
