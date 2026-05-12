import { Link } from 'react-router-dom';
import HomeInfoSections from '../components/HomeInfoSections';
import { artworks } from '../data/artworks';

export default function HomePage() {
  const featuredArtwork = artworks.find(({ id }) => id === 'session-one-study-one') ?? artworks[0];

  return (
    <>
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
          <p className="featured-artwork__intro">
            Explore a focused portfolio of liquid-inspired paintings shaped by layered pigment,
            luminous gradients, and slow-moving motion studies.
          </p>
          <div className="action-group">
            <Link className="button-link button-link--primary" to="/gallery">
              Explore the gallery
            </Link>
            <Link className="button-link" to="/#about">
              Learn about the studio
            </Link>
          </div>
        </div>
      </section>
      <HomeInfoSections />
    </>
  );
}
