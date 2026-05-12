import { Link, useParams } from 'react-router-dom';
import { artworks } from '../data/artworks';

export default function ArtworkDetailPage() {
  const { artworkId } = useParams();
  const artwork = artworks.find(({ id }) => id === artworkId);

  if (!artwork) {
    return (
      <section className="artwork-detail">
        <p className="eyebrow">Gallery</p>
        <h1>Artwork not found</h1>
        <p>The requested artwork is not available in the current collection.</p>
        <Link className="button-link button-link--primary" to="/gallery">
          Return to the gallery
        </Link>
      </section>
    );
  }

  return (
    <article className="artwork-detail">
      <div className="artwork-detail__media">
        <img className="artwork-detail__image" src={artwork.image} alt={artwork.title} />
      </div>
      <div className="artwork-detail__content">
        <p className="eyebrow">Artwork detail</p>
        <h1>{artwork.title}</h1>
        <p className="artwork-detail__meta">
          {artwork.year} · {artwork.medium}
        </p>
        <p>{artwork.description}</p>
        <p className="artwork-detail__note">
          Presented as part of the liquid studies portfolio, with emphasis on atmosphere,
          translucency, and slow transitions in color.
        </p>
        <Link className="button-link button-link--primary" to="/gallery">
          Return to the gallery
        </Link>
      </div>
    </article>
  );
}
