import ArtworkCard from '../components/ArtworkCard';
import { artworks } from '../data/artworks';

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <section className="gallery-page__section" id="gallery">
        <p className="eyebrow">Gallery</p>
        <h1>Selected works</h1>
        <p className="gallery-page__intro">
          Browse the current collection and open each piece for a closer look at its palette,
          material details, and studio notes.
        </p>
        <ul className="gallery-page__list">
          {artworks.map((artwork) => (
            <li key={artwork.id}>
              <ArtworkCard artwork={artwork} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
