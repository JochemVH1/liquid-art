import { describe, expect, it } from 'vitest';
import { artworks } from './artworks';

describe('artworks', () => {
  it('exports the first artwork object shape', () => {
    expect(artworks[0]).toMatchObject({
      id: expect.any(String),
      title: expect.any(String),
      image: '/artwork/chromatic-flow.jpg',
      year: expect.any(String),
      medium: expect.any(String),
      description: expect.any(String)
    });
  });
});
