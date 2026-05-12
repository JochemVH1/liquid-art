import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { artworks } from '../data/artworks';
import ArtworkDetailPage from './ArtworkDetailPage';

describe('ArtworkDetailPage', () => {
  it('shows the selected artwork metadata for the routed artwork id', () => {
    const artwork = artworks[0];

    render(
      <MemoryRouter initialEntries={[`/artworks/${artwork.id}`]}>
        <Routes>
          <Route path="/artworks/:artworkId" element={<ArtworkDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: artwork.title })).toBeInTheDocument();
    expect(screen.getByText(`${artwork.year} · ${artwork.medium}`)).toBeInTheDocument();
    expect(screen.getByText(artwork.description)).toBeInTheDocument();
  });
});
