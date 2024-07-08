import { NextUIProvider } from "@nextui-org/react";
import { EmojiPicker } from "./EmojiPicker";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmojiPicker> = {
  title: "Components/EmojiPicker",
  decorators: [(Story) => <NextUIProvider>{Story()}</NextUIProvider>],
  component: EmojiPicker,
};

export default meta;

type Story = StoryObj<typeof EmojiPicker>;

export const Default: Story = {
  args: {
    value: "🎁",
  },
  render: (props) => <EmojiPicker {...props} />,
};
