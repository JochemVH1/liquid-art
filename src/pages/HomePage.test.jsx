import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { artworks } from '../data/artworks';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('shows the first artwork as the featured piece', () => {
    const featuredArtwork = artworks[0];

    render(<HomePage />);

    expect(screen.getByRole('img', { name: featuredArtwork.title })).toHaveAttribute(
      'src',
      featuredArtwork.image
    );
    expect(screen.getByRole('heading', { name: featuredArtwork.title })).toBeInTheDocument();
    expect(screen.getByText(featuredArtwork.description)).toBeInTheDocument();
  });
});
