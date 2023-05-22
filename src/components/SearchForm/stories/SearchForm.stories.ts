import type { Meta, StoryObj } from "@storybook/react";

import SearchForm from "../SearchForm";

const meta = {
  title: "Common/SearchForm",
  component: SearchForm,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInitialSearchString: Story = {
  args: {
    initialSearchString: "search text",
  },
};

export const WithSearchCallback: Story = {
  args: {
    onSearch: () => {},
  },
};
