import ArtworkCard from '../components/ArtworkCard';
import { artworks } from '../data/artworks';

export default function GalleryPage() {
  return (
    <section className="gallery-page">
      <p className="eyebrow">Gallery</p>
      <h1>Selected works</h1>
      <ul className="gallery-page__list">
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <ArtworkCard artwork={artwork} />
          </li>
        ))}
      </ul>
    </section>
  );
}
