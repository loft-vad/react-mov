import type { Meta, StoryObj } from "@storybook/react";

import MovieListPage from "../MovieListPage";

const meta = {
  title: "Common/MovieListPage",
  component: MovieListPage,
  tags: ["autodocs"],
} satisfies Meta<typeof MovieListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
