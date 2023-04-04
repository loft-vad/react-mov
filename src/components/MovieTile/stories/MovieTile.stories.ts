import type { Meta, StoryObj } from "@storybook/react";

import MovieTile, { Movie } from "../MovieTile";

const meta = {
  title: "Common/MovieTile",
  component: MovieTile,
  tags: ["autodocs"],
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

const movie: Movie = {
  id: 1,
  movieName: "Pulp Fiction",
  imageUrl: "",
  releaseYear: 2004,
  genres: [
    { id: 1, name: "Action & Adventure" },
    { id: 2, name: "Comedy" },
  ],
};

export const Default: Story = {
  args: {
    movieData: movie,
    onClickHandler: () => {},
  },
};
