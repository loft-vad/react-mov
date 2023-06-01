import type { Meta, StoryObj } from "@storybook/react";

import SortControl from "../SortControl";
import { sortBy } from "../../../pages/MovieListPage/MovieListPage";

const meta = {
  title: "Common/SortControl",
  component: SortControl,
  tags: ["autodocs"],
} satisfies Meta<typeof SortControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    values: sortBy,
    selected: sortBy[0].name,
  },
};

export const WithSelectedOnClick: Story = {
  args: {
    values: sortBy,
    selected: sortBy[0].name,
    onSelect: () => {},
  },
};
