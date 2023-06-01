import type { Meta, StoryObj } from "@storybook/react";

import MovieTile from "../MovieTile";
import moviesDb from "../../../data/movies";
import { MovieFull } from "../../MovieDetails/MovieDetails";

const meta = {
  title: "Common/MovieTile",
  component: MovieTile,
  tags: ["autodocs"],
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

const movie: MovieFull = moviesDb[0];

export const Default: Story = {
  args: {
    movieData: movie,
    onClickHandler: () => {},
  },
};
