import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Dialog";
import { ModalProps } from "./Dialog";
import { MovieFull } from "../../MovieDetails/MovieDetails";
import MovieForm from "../../MovieForm/MovieForm";
import moviesDb from "../../../data/movies";

const meta = {
  title: "Common/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

const movieInfo: MovieFull = moviesDb[0];

export const Default: Story = {
  args: {
    title: "Default Modal",
  },
};

export const WithMovieForm: Story = {
  args: {
    title: "Empty form",
  },
  render: (args: ModalProps) => (
    <Modal {...args}>
      <MovieForm />
    </Modal>
  ),
};

export const WithMovieFormData: Story = {
  args: {
    title: "With movie info",
  },
  render: (args: ModalProps) => (
    <Modal {...args}>
      <MovieForm movieInfo={movieInfo} />
    </Modal>
  ),
};

export const WithMovieDelete: Story = {
  args: {
    title: "Delete movie",
    type: "confirm",
    text: "Are you sure want to delete this movie?",
  },
  render: (args: ModalProps) => <Modal {...args} />,
};
