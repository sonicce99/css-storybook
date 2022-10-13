import Switch from "../components/Switch";

export default {
  title: "dongsu/Switch",
  compnent: Switch,
};

const Templete = (args) => <Switch {...args} />;

export const IphoneStyle = Templete.bind({});
