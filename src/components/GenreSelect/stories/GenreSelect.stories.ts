import type { Meta, StoryObj } from "@storybook/react";

import GenreSelect, { genre } from "../GenreSelect";

const meta = {
  title: "Common/GenreSelect",
  component: GenreSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof GenreSelect>;

const genres: genre[] = [
  { id: 1, name: "All" },
  { id: 2, name: "Documentary" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Horror" },
  { id: 5, name: "Crime" },
];

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
    activeItem: genres[3].name,
  },
};

export const WithSelectedOnClick: Story = {
  args: {
    genres: genres,
    activeItem: genres[3].name,
    onSelect: () => {},
  },
};
