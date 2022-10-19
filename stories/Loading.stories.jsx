import Loading from "../components/Loading";

export default {
  title: "dongsu/Loading",
  compnent: Loading,
};

const Templete = (args) => <Loading {...args} />;

export const Default = Templete.bind({});
