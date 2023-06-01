import type { Meta, StoryObj } from "@storybook/react";

import GenreSelect from "../GenreSelect";

const meta = {
  title: "Common/GenreSelect",
  component: GenreSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof GenreSelect>;

const genres: string[] = ["All", "Documentary", "Comedy", "Horror", "Crime"];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    genres: genres,
  },
};

export const WithSelectedValue: Story = {
  args: {
    genres: genres,
    activeItem: genres[3],
  },
};

export const WithSelectedOnClick: Story = {
  args: {
    genres: genres,
    activeItem: genres[3],
    onSelect: () => {},
  },
};
