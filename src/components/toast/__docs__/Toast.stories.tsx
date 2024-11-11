import type { Meta, StoryObj } from "@storybook/react";
import ToastExample from "./ToastExample";
import React from "react";

const meta: Meta<typeof ToastExample> = {
  title: "toast",
  component: ToastExample,
};

export default meta;
type Story = StoryObj<typeof ToastExample>;

export const Success: Story = {
  args: {
    text: "Success",
    type: "success",
    mobile: "desktop",
  },
};

export const Warning: Story = {
  args: {
    text: "Warn",
    type: "warn",
    mobile: "desktop",
  },
};

export const Error: Story = {
  args: {
    text: "Error",
    type: "error",
    mobile: "desktop",
  },
};

export const Info: Story = {
  args: {
    text: "Info",
    type: "info",
    mobile: "desktop",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ToastExample text="Success!" type="success" mobile="desktop" />
      <ToastExample text="Warning!" type="warn" mobile="desktop" />
      <ToastExample text="Error!" type="error" mobile="desktop" />
      <ToastExample text="Info!" type="info" mobile="desktop" />
    </div>
  ),
};
