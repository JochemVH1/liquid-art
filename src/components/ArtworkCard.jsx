import { Link } from 'react-router-dom';

export default function ArtworkCard({ artwork }) {
  return (
    <article className="artwork-card">
      <Link className="artwork-card__link" to={`/artworks/${artwork.id}`}>
        <img src={artwork.image} alt={artwork.title} />
        <h2 className="artwork-card__title">{artwork.title}</h2>
        <p className="artwork-card__meta">
          {artwork.year} · {artwork.medium}
        </p>
        <span className="artwork-card__cta">View details</span>
      </Link>
    </article>
  );
}
