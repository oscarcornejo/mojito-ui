import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
  onClick: () => undefined,
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  variant: "danger",
  shape: "rounded",
  onClick: () => undefined,
};
