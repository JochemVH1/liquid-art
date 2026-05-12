import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { artworks } from '../data/artworks';
import GalleryPage from './GalleryPage';

describe('GalleryPage', () => {
  it('renders every artwork in the gallery list', () => {
    render(
      <MemoryRouter>
        <GalleryPage />
      </MemoryRouter>
    );

    expect(screen.getAllByRole('link', { name: /view details/i })).toHaveLength(artworks.length);

    artworks.forEach((artwork) => {
      expect(screen.getByRole('img', { name: artwork.title })).toHaveAttribute('src', artwork.image);
    });
  });
});
