import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { artworks } from '../data/artworks';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('shows the first artwork as the featured piece', () => {
    const featuredArtwork = artworks[0];

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('img', { name: featuredArtwork.title })).toHaveAttribute(
      'src',
      featuredArtwork.image
    );
    expect(screen.getByRole('heading', { name: featuredArtwork.title })).toBeInTheDocument();
    expect(screen.getByText(featuredArtwork.description)).toBeInTheDocument();
  });

  it('offers calls to action for exploring the collection and studio details', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Explore the gallery' })).toHaveAttribute(
      'href',
      '/gallery'
    );
    expect(screen.getByRole('link', { name: 'Learn about the studio' })).toHaveAttribute(
      'href',
      '/#about'
    );
  });
});
