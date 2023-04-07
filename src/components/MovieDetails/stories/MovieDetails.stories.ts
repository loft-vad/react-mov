import type { Meta, StoryObj } from "@storybook/react";

import MovieDetails, { MovieFull } from "../MovieDetails";
import moviesDb from "../../../data/movies";

const meta = {
  title: "Common/MovieDetails",
  component: MovieDetails,
  tags: ["autodocs"],
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const movie: MovieFull = moviesDb[0];

export const Default: Story = {
  args: {
    movieData: movie,
  },
};
