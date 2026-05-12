import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { artworks } from './data/artworks';
import AppRoutes from './routes';

describe('App routes', () => {
  it('shows the featured artwork on the home route', () => {
    const featuredArtwork =
      artworks.find(({ id }) => id === 'session-one-study-one') ?? artworks[0];

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: featuredArtwork.title })).toBeInTheDocument();
  });

  it('renders the gallery on the gallery route', () => {
    render(
      <MemoryRouter initialEntries={['/gallery']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /selected works/i })).toBeInTheDocument();
  });
});
