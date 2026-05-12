import { describe, expect, it } from 'vitest';
import { artworks } from './artworks';

describe('artworks', () => {
  it('exports the collection of public artwork images', () => {
    expect(artworks).toHaveLength(7);
    expect(artworks.map(({ image }) => image)).toEqual([
      '/artwork/session1-1.jpg',
      '/artwork/session1-2.jpg',
      '/artwork/session1-3.jpg',
      '/artwork/session2-1.jpg',
      '/artwork/session2-2.jpg',
      '/artwork/session2-3.jpg'
    ]);
  });
});
