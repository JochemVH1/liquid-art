import { artworks } from '../data/artworks';

export default function HomePage() {
  const featuredArtwork = artworks[0];

  return (
    <section className="featured-artwork">
      <p className="eyebrow">Featured piece</p>
      <div className="featured-artwork__media">
        <img
          className="featured-artwork__image"
          src={featuredArtwork.image}
          alt={featuredArtwork.title}
        />
      </div>
      <div className="featured-artwork__content">
        <h1>{featuredArtwork.title}</h1>
        <p className="featured-artwork__meta">
          {featuredArtwork.year} · {featuredArtwork.medium}
        </p>
        <p>{featuredArtwork.description}</p>
      </div>
    </section>
  );
}
